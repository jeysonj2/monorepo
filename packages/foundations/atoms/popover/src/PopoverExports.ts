import { html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';

import { style } from './style.css.js';

// types & interfaces
type TB = 'top' | 'bottom';
type LR = 'left' | 'right';
type Reveals = 'hover' | 'click';
type GlobalOpenEvent = { id: string };
export type Placement = `${TB}-${LR | 'center'}` | `${LR}-${TB | 'center'}`;

interface Rectangle {
  top: number;
  bottom: number;
  left: number;
  right: number;
}
interface StyleOBJ {
  left: number;
  top: number;
  x: number;
  y: number;
}

export class Popover extends LitElement {
  static styles = style;

  static COUNT: number = 0;

  @property() placement: Placement = 'bottom-center';

  @property() target!: string;

  @property() revealby: Reveals = 'hover';

  @property({ type: Boolean }) hideonoutsideclick: boolean = false;

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  open: boolean = false;

  @query('div.wrapper') wrapperElement!: HTMLDivElement;

  @state() rerender: number = 0;

  private _offsetTop: number = 0;

  private _offsetLeft: number = 0;

  private _scrollX: number = 0;

  private _scrollY: number = 0;

  private targetElement!: HTMLElement;

  private customid: string;

  // #region class functions
  constructor() {
    super();
    Popover.COUNT += 1;
    this.customid = `${Math.random()}${Popover.COUNT}`;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('all-popover-open', this.handleGlobalOpen);
    if (this.targetElement) {
      // flush
      window.removeEventListener('resize', this.handleResize);
      if (this.revealby === 'click') {
        this.targetElement.removeEventListener('click', this.handleToggle);
      } else {
        this.targetElement.removeEventListener('mouseover', this.handleReveal);
        window.removeEventListener('mousemove', this.handleHide);
      }
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute('target'))
      throw new Error('Popover needs a target!');

    // getting element - we check first at parent level
    let element = this.parentNode?.querySelector<HTMLElement>(this.target);
    // and if unsuccessful we revert to global state
    if (element === null)
      element = document.querySelector<HTMLElement>(this.target);

    if (element) {
      this.targetElement = element;
      window.addEventListener('resize', this.handleResize);
      if (this.revealby === 'click') {
        this.targetElement.addEventListener('click', this.handleToggle);
      } else {
        this.targetElement.addEventListener('mouseover', this.handleReveal);
        window.addEventListener('mousemove', this.handleHide);
      }
    }

    if (this.hideonoutsideclick) {
      window.addEventListener('click', this.handleOutsideClick);
    }
    window.addEventListener('all-popover-open', this.handleGlobalOpen);

    // make sure the DOM has loaded
    setTimeout(() => {
      if (this.wrapperElement instanceof HTMLDivElement) {
        this.rerender += 1;
      }
    }, 1);
  }
  // #endregion

  // #region Event Functions
  private handleResize() {
    if (!this.open) return true;
    return false;
  }

  private handleReveal = () => {
    this.openPopover();
  };

  private handleHide = (event: MouseEvent) => {
    if (!this.open) return;

    const wrapperBox = this.wrapperElement?.getBoundingClientRect();
    const targetBox = this.targetElement?.getBoundingClientRect();
    const { clientX: x, clientY: y } = event;

    if (wrapperBox instanceof DOMRect) {
      if (Popover.mouseWithin(x, y, wrapperBox)) return;
    }
    if (targetBox instanceof DOMRect) {
      if (Popover.mouseWithin(x, y, targetBox)) return;
    }

    this.closePopover();
  };

  private handleToggle = (event: Event) => {
    event.preventDefault();

    if (this.open) this.closePopover();
    else this.openPopover();
  };

  private handleGlobalOpen = (_event: Event) => {
    const event = _event as CustomEvent<GlobalOpenEvent>;
    if (event.detail.id === this.customid) {
      this.wrapperElement.style.zIndex = '2';
    } else {
      this.wrapperElement.style.zIndex = '1';
    }
  };

  private handleOutsideClick = (event: MouseEvent) => {
    if (!this.hideonoutsideclick) return;
    if (!this.open) return;

    const wrapperBox = this.wrapperElement?.getBoundingClientRect();
    const targetBox = this.targetElement?.getBoundingClientRect();
    const { clientX: x, clientY: y } = event;

    if (wrapperBox instanceof DOMRect) {
      if (Popover.mouseWithin(x, y, wrapperBox)) return;
    }
    if (targetBox instanceof DOMRect) {
      if (Popover.mouseWithin(x, y, targetBox)) return;
    }

    this.closePopover();
  };
  // #endregion

  // #region helper functions
  public static mouseWithin(x: number, y: number, rec: Rectangle) {
    return rec.left <= x && rec.right >= x && rec.top <= y && rec.bottom >= y;
  }

  public openPopover() {
    this.open = true;
    this.dispatchEvent(new Event('popover-open'));
    window.dispatchEvent(
      new CustomEvent<GlobalOpenEvent>('all-popover-open', {
        detail: { id: this.customid },
      })
    );
  }

  public closePopover() {
    this.open = false;
    this.dispatchEvent(new Event('popover-close'));
  }
  // #endregion

  // #region style functions
  private getPlacement(box: DOMRect): StyleOBJ {
    const [first, second] = this.placement.split('-');

    let offsetTop = 0;
    let offsetLeft = 0;
    let scrollX = 0;
    let scrollY = 0;
    let hitfixed = false;
    let offsetParent: any = this.targetElement; // ugly any..
    while (offsetParent.offsetParent) {
      offsetParent = offsetParent.offsetParent;
      offsetTop += offsetParent.offsetTop;
      offsetLeft += offsetParent.offsetLeft;

      // NOTE this would shift to top-right corner for some reason..
      // if (!hitfixed)
      // {
      //   scrollX += offsetParent.scrollX;
      //   scrollY += offsetParent.scrollY;
      // }

      if (
        window.getComputedStyle(offsetParent).getPropertyValue('position') ===
        'fixed'
      ) {
        // console.log('we are fixed')
        hitfixed = true;
        break;
      }
    }
    if (!hitfixed) {
      scrollX += window.scrollX;
      scrollY += window.scrollY;
    }

    this._offsetTop = offsetTop;
    this._offsetLeft = offsetLeft;
    this._scrollX = scrollX;
    this._scrollY = scrollY;

    const styleOBJ: StyleOBJ = { top: 0, left: 0, x: 0, y: 0 };
    const top = box.top + scrollY - offsetTop;
    const left = box.left + scrollX - offsetLeft;
    const right = left + box.width;
    const bottom = top + box.height;

    switch (first) {
      case 'top':
        styleOBJ.top = top;
        styleOBJ.y = -100;
        break;
      case 'bottom':
        styleOBJ.top = bottom;
        break;
      case 'left':
        styleOBJ.left = left;
        styleOBJ.x = -100;
        break;
      case 'right':
        styleOBJ.left = right;
        break;
      default:
        break;
    }
    if (['left', 'right'].includes(first)) {
      switch (second) {
        case 'top':
          styleOBJ.top = bottom;
          styleOBJ.y = -100;
          break;
        case 'center':
          styleOBJ.top = top + box.height / 2;
          styleOBJ.y = -50;
          break;
        case 'bottom':
          styleOBJ.top = top;
          break;
        default:
          break;
      }
    } else if (['top', 'bottom'].includes(first)) {
      switch (second) {
        case 'left':
          styleOBJ.left = right;
          styleOBJ.x = -100;
          break;
        case 'center':
          styleOBJ.left = left + box.width / 2;
          styleOBJ.x = -50;
          break;
        case 'right':
          styleOBJ.left = left;
          break;
        default:
          break;
      }
    }

    return styleOBJ;
  }

  public static contrainStyleObject(
    placement: StyleOBJ,
    wrapperBox: DOMRect,
    targetBox: DOMRect,
    element?: Element
  ) {
    const copy = { ...placement };
    const limit: Rectangle = { left: 0, top: 0, right: 0, bottom: 0 };
    if (element) {
      const box = element.getBoundingClientRect();
      limit.left = box.left + window.scrollX;
      limit.right = box.top + window.scrollY;
      limit.right = box.left + box.width;
      limit.bottom = box.top + box.height;
    } else {
      limit.right = window.innerWidth;
      limit.bottom = window.innerHeight;
    }

    const x = copy.left + (copy.x / 100) * wrapperBox.width;
    const y = copy.top + (copy.y / 100) * wrapperBox.height;

    if (x < limit.left) {
      // console.log('limit?')
      // copy.left = limit.left;
      // copy.x = 0;
    }
    // FIXME this is falsly working - perhaps something with position:fixed
    if (y + wrapperBox.height > limit.bottom) {
      // console.log("we should check to flip Y!!")
    }
    // else if (x)
    // else if (y)

    return copy;
  }

  private getStyle() {
    const targetBox = this.targetElement?.getBoundingClientRect();
    const wrapperBox = this.wrapperElement?.getBoundingClientRect();

    let placement = this.getPlacement(targetBox);

    if (wrapperBox instanceof DOMRect) {
      placement = Popover.contrainStyleObject(placement, wrapperBox, targetBox);
    }

    return `top:${placement.top}px;left:${placement.left}px;transform:translate(${placement.x}%,${placement.y}%);`;
  }
  // #endregion

  render() {
    // if (!this.open) return;
    const [firstplacement] = this.placement.split('-');

    return html`
      <div
        style=${this.getStyle()}
        class=${[
          'wrapper',
          this.placement,
          firstplacement,
          this.open ? 'open' : 'hide',
        ].join(' ')}
      >
        <slot></slot>
      </div>
    `;
  }
}
