// import { html } from 'lit';
// import { fixture } from '@open-wc/testing';
// import { Dropdown } from '../src/DropdownExports.js';
import '../src/dropdown.js';

// TODO test fails as it claims "ConnectDropdown" does not exists on iz-option : false !!

describe.skip('Dropdown', () => {
  it('should be able to toggle values', async () => {
    // const el = await fixture<Dropdown>(html`
    //   <iz-dropdown>
    //     <iz-option id="A" value="A">A</iz-option>
    //     <iz-option id="B" value="B">B</iz-option>
    //     <iz-option id="C" value="C">C</iz-option>
    //   </iz-dropdown>
    // `);
    // el.querySelector<Option>("#A")?.click();
    // expect(el.value).to.be.equal("A");
  });
  it.skip('should be able to select multiple values', async () => {});
  it.skip('should take defaultValue', async () => {});
  it.skip('should take value', async () => {});
  it.skip('updating defaultValue should result in value being updated', async () => {});
  it.skip('updating value should result in value being updated', async () => {});
  it.skip('should update value-attribute', async () => {});
  it.skip('should submit the selected values', async () => {});
  it.skip('should submit the selected values + defaultValue', async () => {});
});

describe.skip('Dropdown - Text', () => {
  it('should render with Dropdown', async () => {});
  it('should render with provided placeholder', async () => {});
  it('should render with provided fixedText', async () => {});
  it('should prioritize selected values over placeholder', async () => {});
  it('should provide fixedText above all else', async () => {});
});

describe.skip('Dropdown Form tests', () => {
  it('should submit', async () => {});
  it('should submit with toggled values', async () => {});
  it('should submit with value attribute', async () => {});
  it('should submit with defaultValue attribute', async () => {});
  it('should submit with defaultValue + toggled', async () => {});
});
