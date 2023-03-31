import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

// classes & types
import { ListItem, DragStartEvent } from "@interzero/list-item";

// local import
import { style } from './style.css.js';
import { CumulativeOffset } from './util';

// type TargetInfo = DragStartEvent & { index: number };
type Position = { x: number, y: number };
interface DistanceInfo {
  item: ListItem|null;
  sign: number;
  distance: number;
}
interface DragInfo {
  box: DOMRect;
  mouse: Position;
  item: ListItem;
  clone: ListItem;
  offset: number;
}

export class List extends LitElement {
  static styles = style;

  // @state() private info: TargetInfo|null = null;

  private box!: DOMRect;
  private offsettop = 0;
  private offsetleft = 0;
  private dragInfo: DragInfo|null = null;


  // class functions
  connectedCallback():void {
    super.connectedCallback();

    this.handleWindowResize(new Event("bajs")); // this means poop in Swedish
    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
  }
  disconnectedCallback(): void {
    super.disconnectedCallback();

    window.removeEventListener("resize", this.handleWindowResize);
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  // event handlers
  private handleSlotChange = (event:Event) => {
    const slot = event.currentTarget as HTMLSlotElement;
    let index = 0;
    slot.assignedNodes().forEach(node => {
      if (node instanceof ListItem)
      {
        if (!node.hasAttribute('data-list-index')) {
          // events
          node.addEventListener('remove', this.handleItemRemove);
          node.addEventListener('drag-start', this.handleItemDragStart);
        }
      }
    });

    // set the new bounding box
    setTimeout(() => {
      this.handleWindowResize(new Event("bajs")); // this means poop in Swedish
    }, 1);
  }
  private handleWindowResize = (event:Event) => {
    const offset = CumulativeOffset(this);
    this.offsettop = offset.top;
    this.offsetleft = offset.left;
  }
  private handleItemRemove = (event:Event) => {
    if (event.target instanceof ListItem)
    {
      this.dispatchEvent(new Event("item-remove", event));
      this.removeChild(event.target);
    }
  }
  private handleItemDragStart = (event:Event) => {
    if (event instanceof CustomEvent<DragStartEvent>)
    {
      if (this.dragInfo) return;

      this.box = this.getBoundingClientRect();

      event.detail.target.classList.add('hidden');

      const itembox = event.detail.target.getBoundingClientRect();
      const mouse = { x: event.detail.pageX, y: event.detail.pageY };
      const itemOffset = itembox.y - this.box.y;
      const delta = mouse.y - this.offsetTop - itemOffset;

      // create the clone
      const clone = event.detail.target.cloneNode(true) as ListItem;
      clone.classList.add('dragged');
      clone.classList.remove('hidden');
      clone.dragged = true;
      const containery = mouse.y - this.offsettop;

      // set position to match target
      clone.style.top = (containery - delta)+"px";
      // append clone
      this.appendChild(clone);

      this.dragInfo = {
        box: itembox,
        mouse,
        offset: delta,
        item: event.detail.target,
        clone,
      }
    }
  }
  private handleMouseUp = (event:MouseEvent) => {
    if (!this.dragInfo) return;

    // reset dragInfo
    this.dragInfo.item.classList.remove("hidden");
    this.removeChild(this.dragInfo.clone);
    this.dragInfo = null;
  }
  private handleMouseMove = (event:MouseEvent) => {
    if (!this.dragInfo) return;

    const containery = event.pageY - this.offsettop;

    const itemTop = containery - this.dragInfo.offset;
    const itemBottom = itemTop + this.dragInfo.box.height;

    if (itemTop >= 0 && itemBottom <= this.box.height)
    {
      this.dragInfo.clone.style.top = itemTop+"px";

      const distanceInfo:DistanceInfo = {
        item: null,
        distance: Number.MAX_SAFE_INTEGER,
        sign: 0,
      }

      for (let i=0; i<this.children.length; i++)
      {
        const item = this.children[i];
        if (item instanceof ListItem && !item.classList.contains("dragged"))
        {
          const distance = this.getHoverDistance(item, itemTop, itemBottom, this.dragInfo.box.height);
          const abs_distance = Math.abs(distance);

          if (abs_distance < distanceInfo.distance)
          {
            distanceInfo.distance = abs_distance;
            distanceInfo.sign = Math.sign(distance);
            distanceInfo.item = item;
          }
        }
      }
      if (distanceInfo.item)
      {
        // swap
        this.insert(distanceInfo);
      }
    }
  }

  // private functions
  private getHoverDistance(item:ListItem, top:number, bottom:number, height:number) {
    const box = item.getBoundingClientRect();
    const offset = 5;

    if (bottom < item.offsetTop + offset) return Number.MAX_SAFE_INTEGER;
    if (top > item.offsetTop + box.height - offset) return Number.MAX_SAFE_INTEGER;

    const a = item.offsetTop + box.height/2
    const b = top + height/2
    return a - b;
  }
  private insert(info:DistanceInfo) {
    if (!this.dragInfo) return;
    
    
    if (info.item)
    {
      if (info.item.classList.contains("hidden")) return;
      
      // remove the reference item
      this.removeChild(this.dragInfo.item);

      if (info.sign === 1)
      {
        const next = info.item.nextElementSibling;
        if (!next)
        {
          this.appendChild(this.dragInfo.item);
        }
        else this.insertBefore(this.dragInfo.item, next);
      }
      else 
      {
        this.insertBefore(this.dragInfo.item, info.item);
      }
    }
  }

  render() {
    return html`
      <slot @slotchange=${this.handleSlotChange}></slot>
    `;
  }
}
