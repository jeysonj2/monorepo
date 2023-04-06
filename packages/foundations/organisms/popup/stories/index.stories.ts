import { html, TemplateResult } from 'lit';
import '../src/popup.js';
import { State, Variant } from '../src/PopupExports.js';

export default {
  title: 'foundations/organisms/Popup',
  component: 'iz-popup',
  argTypes: {
    headerTitle: { control: 'text' },
    hideonoutsideclick: { control: 'boolean' },
    variant: { control: 'select', options: ['parent','global'] },
    state: { control: 'select', options: ['show','hide'] },

    // style
    backdropBackground: { control: 'color' },
    backdropFilter: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  headerTitle: string;
  hideonoutsideclick: boolean;
  variant: Variant;
  state: State;
  // style
  backdropBackground: string;
  backdropFilter: string;
}

const Template: Story<ArgTypes> = ({
  headerTitle,
  hideonoutsideclick,
  variant,
  state,
  // style
  backdropBackground,
  backdropFilter,
}: ArgTypes) => html`
  <style>
    iz-popup {
      --popup-backdrop-background: ${backdropBackground};
      --popup-backdrop-filter: ${backdropFilter};
    }

    fieldset {
      height: 400px;
      width: 500px;
      display: block;
      position: relative;

      margin: auto;
    }
  </style>
  <fieldset>
    <legend>Parent Element</legend>
    <iz-popup
      .headerTitle=${headerTitle}
      .hideonoutsideclick=${hideonoutsideclick}
      .variant=${variant}
      state=${state}
    >
      <p>Some popup content</p>
      <footer slot="footer">
        <p>Oh look im a footer</p>
      </footer>
    </iz-popup>
  </fieldset>
`;

export const Regular = Template.bind({});
Regular.args = {
  headerTitle: "Popup title",
  hideonoutsideclick: false,
  variant: "global",
  state: "show",
  // style
  backdropBackground: "rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(0px)",
}