import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/typography/wc';
import '@interzero/button/wc';
import '@interzero/input/wc';
// moleculez
import '@interzero/badge/wc';
import '@interzero/field/wc';
import '@interzero/option/wc';
// organisms
import '@interzero/dropdown/wc';

// tools
import '@interzero-tools/translate/wc';

// local
import { style } from './style.css.js';

// types & interfaces
export interface SubmitEvent {
  email: string;
  firstname: string;
  lastname: string;
  role: string;
}

export class ProfileForm extends LitElement {
  static styles = style;

  @property() email!: string;

  @property() firstname!: string;

  @property() lastname!: string;

  @property() status!: string;

  @property() userRole!: string;

  @property({ type: Array }) roles!: string[];

  private handleSubmit = (event: Event) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);

    const email = data.get('email');
    const firstname = data.get('firstname');
    const lastname = data.get('lastname');
    const role = data.get('role');

    if (!(firstname && lastname && role)) {
      // tell form its invalid..
      alert('invalid form...');
    } else {
      this.dispatchEvent(
        new CustomEvent<SubmitEvent>('submit', {
          detail: {
            email: email as string,
            firstname: firstname as string,
            lastname: lastname as string,
            role: role as string,
          },
        })
      );
    }
  };

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <iz-field label="email">
          <iz-input
            required
            type="email"
            value=${this.email}
            name="email"
            .errors=${{
              badInput: 'LALA',
            }}
          ></iz-input>
        </iz-field>
        <iz-field label="firstname">
          <iz-input
            required
            value=${this.firstname}
            name="firstname"
          ></iz-input>
        </iz-field>
        <iz-field label="lastname">
          <iz-input required value=${this.lastname} name="lastname"></iz-input>
        </iz-field>
        <div>
          <iz-typography variant="label"
            ><iz-translate>status</iz-translate></iz-typography
          >
          <iz-badge variant=${this.status === 'locked' ? 'error' : 'success'}>
            <iz-translate>${this.status}</iz-translate>
          </iz-badge>
        </div>
        <iz-field label="role">
          <iz-dropdown
            required
            name="role"
            disabled=${this.userRole !== 'admin'}
            value=${this.userRole}
          >
            ${this.roles.map(
              role =>
                html`<iz-option value=${role}
                  ><iz-translate>${role}</iz-translate></iz-option
                >`
            )}
          </iz-dropdown>
        </iz-field>

        <iz-button type="submit">
          <iz-translate>save</iz-translate>
        </iz-button>
      </form>
    `;
  }
}
