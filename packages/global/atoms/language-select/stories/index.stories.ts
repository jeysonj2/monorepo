import { html, TemplateResult } from 'lit';
import type { Placement } from '@interzero/popover';

import '../src/language-select.js';

export default {
  title: 'global/atoms/LanguageSelect',
  component: 'iz-global-language-select',
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-left',
        'top-right',
        'top-center',
        'bottom-left',
        'bottom-right',
        'bottom-center',
        'left-top',
        'left-bottom',
        'left-center',
        'right-top',
        'right-bottom',
        'right-center',
      ],
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  placement?: Placement;
}

const Template: Story<ArgTypes> = ({ placement }: ArgTypes) => html`
  <script>
    const translations = [
      {
        id: 'en',
        name: 'english',
        flag: '🇬🇧',
        translations: {},
      },
      {
        id: 'se',
        name: 'swedish',
        flag: '🇸🇪',
        translations: {
          'Hello World': '[SE] Hello World',
          'Hello Fantastic World': '[SE] Hello Fantastic World',
          'Hello Interzero': '[SE] Hello Interzero',
          'I like potatoes': '[SE] I like potatoes',
          'select language': '[SE] select language',
        },
      },
      {
        id: 'es',
        name: 'spanish',
        flag: '🇪🇸',
        translations: {
          'Hello World': '[ES] Hello World',
          'Hello Fantastic World': '[ES] Hello Fantastic World',
          'Hello Interzero': '[ES] Hello Interzero',
          'I like potatoes': '[ES] I like potatoes',
          'select language': '[ES] select language',
        },
      },
      {
        id: 'de',
        name: 'german',
        flag: '🇩🇪',
        translations: {
          'Hello World': '[DE] Hello World',
          'Hello Fantastic World': '[DE] Hello Fantastic World',
          'Hello Interzero': '[DE] Hello Interzero',
          'I like potatoes': '[DE] I like potatoes',
          'select language': '[DE] select language',
        },
      },
    ];

    window.izTranslation.loadAll(translations);
    window.izTranslation.change('en');
  </script>
  <style>
    div {
      min-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  <div>
    <iz-global-language-select
      .placement=${placement}
    ></iz-global-language-select>
  </div>
`;

export const Regular = Template.bind({});
Regular.args = {
  placement: 'bottom-left',
};
