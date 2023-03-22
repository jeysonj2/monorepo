import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// style import
import { style } from './style.css';

// types & interfaces
type CellData = string;
type Col = Record<string, CellData>;
export type Data = Col[];

export interface ColumnConfig {
  name: string;
  colspan: number;
}
export type HeaderColumns = Record<string, ColumnConfig>;

export class Table extends LitElement {
  static styles = style;

  @property({ type: Array }) data!: Data;

  @property({ type: Object }) columns?: HeaderColumns;

  @property({ type: Boolean }) fixedHeader: boolean = true;

  @property({ type: Boolean }) showSettings: boolean = true;

  private getHeaderColumns(): ColumnConfig[] {
    const columns: ColumnConfig[] = [];
    // if (this.columns)
    // {

    // }
    // else if (this.data)
    // FIXME: this is a hack
    if (!this.columns && this.data) {
      const firstrow = this.data[0];
      for (const key of Object.keys(firstrow)) {
        columns.push({
          name: key,
          colspan: 1,
        });
      }
    }

    return columns;
  }

  render() {
    const headerColumns = this.getHeaderColumns();

    return html`
      <table class=${[this.fixedHeader ? 'fixed' : ''].join(' ')}>
        <thead>
          ${this.showSettings
            ? html`
                <tr>
                  <th>lala</th>
                </tr>
              `
            : null}
          <tr>
            ${headerColumns.map(
              config => html`
                <th colspan=${config.colspan}>${config.name}</th>
              `
            )}
          </tr>
        </thead>
        ${this.data
          ? this.data.map(row => {
              const cols = Object.values(row);

              return html`
                <tr>
                  ${cols.map(value => html` <td>${value}</td> `)}
                </tr>
              `;
            })
          : null}
      </table>
    `;
  }
}
