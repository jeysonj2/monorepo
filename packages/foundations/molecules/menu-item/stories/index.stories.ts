import { html, TemplateResult } from 'lit';
import '../src/menu-item.js';

export default {
  title: 'foundations/molecules/MenuItem',
  component: 'iz-menu-item',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  value: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  value = 'value',
  slot = html`Menu Item`,
}: ArgTypes) => html` <iz-menu-item .value=${value}>${slot}</iz-menu-item> `;

export const Regular = Template.bind({});
