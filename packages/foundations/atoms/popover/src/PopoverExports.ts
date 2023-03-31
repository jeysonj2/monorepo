import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

import { style } from './style.css';

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

  private static COUNT: number = 0;
  private targetElement!: HTMLElement;
  private popupElement?: HTMLElement;
  private parentPath!: HTMLElement[];
  private customid: string;
  private fixedOffsetX: number = 0;
  private fixedOffsetY: number = 0;
  private fixedOffset: boolean = false;

  @property() placement: Placement = 'bottom-center';
  @property() target!: string;
  @property() revealby: Reveals = 'hover';
  @property({ type: Boolean }) hideonoutsideclick: boolean = false;
  @property({ type: Boolean }) open: boolean = false;
  @property({ type: Boolean }) matchwidth: boolean = false;
  @query('div.wrapper') wrapperElement!: HTMLDivElement;

  // class functions
  constructor() {
    super();
    Popover.COUNT += 1;
    this.customid = `${Math.random()}${Popover.COUNT}`;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('all-popover-open', this.handleGlobalOpen);
    window.removeEventListener("resize", this.setPosition);

    if (this.targetElement) {
      // flush
      if (this.revealby === 'click') {
        this.targetElement.removeEventListener('click', this.handleToggle);
      } else {
        this.targetElement.removeEventListener('mouseover', this.handleReveal);
        window.removeEventListener('mousemove', this.handleHide);
      }
    }

    if (this.popupElement)
    {
      this.popupElement.removeEventListener("popup-show", this.setPosition);
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute('target'))
      throw new Error('Popover needs a target!');

    // getting element - we check first at parent level
    // let element = this.parentNode?.querySelector<HTMLElement>(this.target);
    // // and if unsuccessful we revert to global state
    // if (element === null)
    // {
    //   element = document.querySelector<HTMLElement>(this.target);
    // }

    const elementInfo = findElement(this, this.target);

    if (elementInfo) 
    {
      this.targetElement = elementInfo[0];
      this.parentPath = elementInfo[1];

      // get fixedoffset
      const fullparentpath = fullParentPath(this);
      for (let parent of fullparentpath)
      {
        if (!this.fixedOffset)
        {
          const computedStyle = window.getComputedStyle(parent);
          if (computedStyle.getPropertyValue('position') === 'fixed')
          {
            const box = parent.getBoundingClientRect();
            this.fixedOffsetX = box.x;
            this.fixedOffsetY = box.y;
            this.fixedOffset = true;
          }
        }

        if (parent.nodeName === "IZ-POPUP")
        {
          this.popupElement = parent;
        }
      }


      if (this.popupElement)
      {
        this.popupElement.addEventListener("popup-show", this.setPosition);
      }

      setTimeout(this.setPosition, 10);
      window.addEventListener("resize", this.setPosition);

      if (this.revealby === 'click') {
        this.targetElement.addEventListener('click', this.handleToggle);
      } else {
        this.targetElement.addEventListener('mouseover', this.handleReveal);
        window.addEventListener('mousemove', this.handleHide);
      }
    }
    else 
    {
      throw new Error(`Could not find target-element: "${this.target}"`);
    }

    if (this.hideonoutsideclick) {
      window.addEventListener('click', this.handleOutsideClick);
    }
    window.addEventListener('all-popover-open', this.handleGlobalOpen);
  }

  private handleReveal = () => {
    this.openPopover();
  };
  private handleHide = (event: MouseEvent) => {
    if (!this.open) return;

    const wrapperBox = this.wrapperElement.getBoundingClientRect();
    const targetBox = this.targetElement?.getBoundingClientRect();
    const { clientX: x, clientY: y } = event;

    if (wrapperBox instanceof DOMRect) {
      if (this.mouseWithin(x, y, wrapperBox)) return;
    }
    if (targetBox instanceof DOMRect) {
      if (this.mouseWithin(x, y, targetBox)) return;
    }

    this.closePopover();
  };
  private handleToggle = (event: Event) => {
    event.preventDefault();

    if (this.open) this.closePopover();
    else this.openPopover();
  };
  private handleGlobalOpen = (_event: Event) => {
    if (!this.open) return;

    const event = _event as CustomEvent<GlobalOpenEvent>;
    if (event.detail.id === this.customid) {
      this.style.zIndex = '800';
    } else {
      this.style.zIndex = '799';
    }
  };
  private handleOutsideClick = (event: MouseEvent) => {
    if (!this.hideonoutsideclick) return;
    if (!this.open) return;

    const wrapperBox = this.getBoundingClientRect();
    const targetBox = this.targetElement?.getBoundingClientRect();
    const { clientX: x, clientY: y } = event;

    if (wrapperBox instanceof DOMRect) {
      if (this.mouseWithin(x, y, wrapperBox)) return;
    }
    if (targetBox instanceof DOMRect) {
      if (this.mouseWithin(x, y, targetBox)) return;
    }

    this.closePopover();
  };

  //  private functions
  private mouseWithin(x: number, y: number, rec: Rectangle) {
    return rec.left <= x && rec.right >= x && rec.top <= y && rec.bottom >= y;
  }
  private setPosition = () => {
    const targetStyle = window.getComputedStyle(this.targetElement);
    const parentElement = this.parentPath[this.parentPath.length - 1];
    const computedParentStyle = window.getComputedStyle(parentElement);
    const targetBox = this.targetElement.getBoundingClientRect();

    let offset:Offset = {x:-window.scrollX,y:-window.scrollY};

    if (['absolute', 'relative'].includes(computedParentStyle.getPropertyValue('position')))
    {
      offset = parentElement.getBoundingClientRect();
    }

    let x = targetBox.left - offset.x;
    let y = targetBox.top - offset.y;

    this.style.left = x+'px';
    this.style.top = y+'px';
    this.style.width = targetStyle.getPropertyValue('width');
    this.style.height = targetStyle.getPropertyValue('height');
  }

  // public functions
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
  public reCalibrate() { // edge cases like dropdown inside a popup (since dropdown width = 0 on initial)
    this.setPosition();
  }
  
  render() {
    // if (!this.open) return;
    const [firstplacement] = this.placement.split('-');

    return html`
      <div
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

// types & interfaces
type Offset = {x: number; y: number;};

// helper functions 
function findElement(element:HTMLElement, selector:string):[HTMLElement,HTMLElement[]]|null {
  const parent = getParent(element);

  if (parent)
  {
    let target = parent.querySelector<HTMLElement>(selector);
    if (!target && parent.shadowRoot) target = parent.shadowRoot.querySelector<HTMLElement>(selector);
    if (target)
    {
      const path:HTMLElement[] = [];
      let targetParent:HTMLElement|null = target;
      while (targetParent = getParent(targetParent))
      {
        path.push(targetParent);
        if (targetParent === parent) break;
      }
      return [target, path];
    }
    
    return findElement(parent, selector);
  }
  
  return null;
}
function fullParentPath(element:HTMLElement):HTMLElement[] {
  const path:HTMLElement[] = [];
  let parent:HTMLElement|null = element;
  while (parent = getParent(parent))
  {
    path.push(parent);
    if (parent === document.documentElement) break;
  }

  return path;
}
function getFixedParentOffset(element:HTMLElement):Offset|null {
  let parent:HTMLElement|null = element;
  while (parent = getParent(parent))
  {
    const computedStyle = window.getComputedStyle(parent);
    if (computedStyle.getPropertyValue('position') === 'fixed')
    {
      const box = parent.getBoundingClientRect();
      return { x: box.x, y: box.y };
    }
    if (parent === document.documentElement) return null;
  }

  return null;
} 

function getParent(element:HTMLElement) {
  let parent = element.parentElement;
  if (parent === null) {
    parent = (element.getRootNode() as any).host;
  }

  return parent;
}