import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
// foundation-atoms
import '@interzero/typography/wc';
// pmp-atoms
import '@interzero-pmp/profile-form';
// pmp-templates
import '@interzero-pmp/page-template';

// tools
import '@interzero-tools/translate/wc';

// classes and types
import type { SubmitEvent } from '@interzero-pmp/profile-form';
import type { ChangeEvent } from '@interzero-pmp/page-template';

// style import
import { style } from './style.css';

export class UserProfile extends LitElement {
  static styles = style;

  @property() email!: string;

  @property() firstname!: string;

  @property() lastname!: string;

  @property({ type: Boolean }) locked: boolean = false;

  @property() status!: string;

  @property() userRole!: string;

  @property() roles!: string[];

  private handleHeaderChange = (event: CustomEvent<ChangeEvent>) => {
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('header-change', { detail: event.detail })
    );
  };

  private handleSubmit = (event: CustomEvent<SubmitEvent>) => {
    this.dispatchEvent(
      new CustomEvent<SubmitEvent>('submit', { detail: event.detail })
    );
  };

  render() {
    return html`
      <iz-pmp-page-template @header-change=${this.handleHeaderChange}>
        <iz-typography variant="heading"
          ><iz-translate>user profile</iz-translate></iz-typography
        >

        <div>
          <iz-pmp-profile-form
            @submit=${this.handleSubmit}
            .email=${this.email}
            .firstname=${this.firstname}
            .lastname=${this.lastname}
            .status=${this.status}
            .userRole=${this.userRole}
            .roles=${this.roles}
          ></iz-pmp-profile-form>
        </div>
      </iz-pmp-page-template>
    `;
  }
}
