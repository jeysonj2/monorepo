import { html, TemplateResult } from 'lit';
import '../src/drag-indicator.js';
import type { Alignment } from '../src/DragIndicatorExports.js';

export default {
  title: 'DragIndicator',
  component: 'iz-drag-indicator',
  argTypes: {
    alignment: { control: 'select', options: ['vertical', 'horizontal'] },
    // style related
    cssContainerSize: { control: 'text' },
    cssSize: { control: 'text' },
    cssHoverSize: { control: 'text' },
    cssHorizontalCursor: {
      control: 'select',
      options: [
        'auto',
        'default',
        'none',
        'pointer',
        'crosshair',
        'text',
        'wait',
        'help',
        'move',
        'progress',
        'cell',
        'not-allowed',
        'grab',
        'grabbing',
        'alias',
        'copy',
        'context-menu',
        'all-scroll',
        'col-resize',
        'row-resize',
        'n-resize',
        'e-resize',
        's-resize',
        'w-resize',
        'ne-resize',
        'nw-resize',
        'se-resize',
        'sw-resize',
      ],
    },
    cssVerticalCursor: {
      control: 'select',
      options: [
        'auto',
        'default',
        'none',
        'pointer',
        'crosshair',
        'text',
        'wait',
        'help',
        'move',
        'progress',
        'cell',
        'not-allowed',
        'grab',
        'grabbing',
        'alias',
        'copy',
        'context-menu',
        'all-scroll',
        'col-resize',
        'row-resize',
        'n-resize',
        'e-resize',
        's-resize',
        'w-resize',
        'ne-resize',
        'nw-resize',
        'se-resize',
        'sw-resize',
      ],
    },
    cssColor: { control: 'color' },
    cssHoverColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  alignment: Alignment;
  // style related
  cssContainerSize: string;
  cssSize: string;
  cssHoverSize: string;
  cssHorizontalCursor: string;
  cssVerticalCursor: string;
  cssColor: string;
  cssHoverColor: string;
}

const Template: Story<ArgTypes> = ({
  alignment,
  // style related
  cssContainerSize,
  cssSize,
  cssHoverSize,
  cssHorizontalCursor,
  cssVerticalCursor,
  cssColor,
  cssHoverColor,
}: ArgTypes) => html`
  <style>
    iz-drag-indicator {
      --drag-indicator-container-size: ${cssContainerSize};
      --drag-indicator-size: ${cssSize};
      --drag-indicator-hover-size: ${cssHoverSize};
      --drag-indicator-horizontal-cursor: ${cssHorizontalCursor};
      --drag-indicator-vertical-cursor: ${cssVerticalCursor};
      --drag-indicator-color: ${cssColor};
      --drag-indicator-hover-color: ${cssHoverColor};
    }
    fieldset {
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  <fieldset>
    <iz-drag-indicator alignment=${alignment}></iz-drag-indicator>
  </fieldset>
`;

export const Regular = Template.bind({});
Regular.args = {
  alignment: 'horizontal',
  // style related
  cssContainerSize: '1rem',
  cssSize: '1px',
  cssHoverSize: '4px',
  cssHorizontalCursor: 'row-resize',
  cssVerticalCursor: 'col-resize',
  cssColor: '#9A9A9A',
  cssHoverColor: '#9ABCFF',
};
