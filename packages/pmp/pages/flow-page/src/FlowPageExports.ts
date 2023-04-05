import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

// web-components
import '@interzero/button-switch/wc';
import '@interzero-pmp/flow-content/wc';
import '@interzero-pmp/page-template/wc';

// types & classes

// style import

// types & interfaces
import type {
  UserModel,
  ChangeEvent as PageTemplateChangeEvent,
} from '@interzero-pmp/page-template';
import type { Variant, Data, CompleteEvent } from '@interzero-pmp/flow-content';
import type { ChangeEvent as SwitchChangeEvent } from '@interzero/button-switch';
import { style } from './style.css.js';

export class FlowPage extends LitElement {
  static styles = style;

  @property({ type: Array }) data: Data[] = [];

  @property({ type: Object }) userData: UserModel = { role: 'user' };

  @state() mode: Variant = 'default';

  // events
  private handleSwitchChange = (event: CustomEvent<SwitchChangeEvent>) => {
    if (event.detail.state === 'left') {
      this.mode = 'default';
    } else {
      this.mode = 'edit';
    }
  };

  private handlePageTemplateChange = (
    event: CustomEvent<PageTemplateChangeEvent>
  ) => {
    this.dispatchEvent(
      new CustomEvent<PageTemplateChangeEvent>('viewport-change', event)
    );
  };

  private handleComplete = (event: CustomEvent<CompleteEvent>) => {
    this.dispatchEvent(new CustomEvent<CompleteEvent>('complete', event));
  };

  render() {
    return html`
      <iz-pmp-page-template
        @change=${this.handlePageTemplateChange}
        .userData=${this.userData}
      >
        ${this.userData.role === 'admin'
          ? html`
              <iz-button-switch
                @change=${this.handleSwitchChange}
                left="Normal View"
                right="Edit Mode"
              ></iz-button-switch>
            `
          : null}
        <iz-pmp-flow-content
          @complete=${this.handleComplete}
          .data=${this.data}
          .root=${this.data?.[0]}
          .variant=${this.mode}
        ></iz-pmp-flow-content>
      </iz-pmp-page-template>
    `;
  }
}
