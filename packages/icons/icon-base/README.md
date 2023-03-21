# @interzero-icons/icon-base

This is not ment to be used only to further build icons to emphsize the sizes + other icon-related stuff
via css and low level javascript

## How to use
Make sure to call the protected function `"getSize()"` as well the function `"getInlineStyle()"` this will return a object containig `{width,height}` + string respectivly.
These can be used inside the render function of the icon like following:

```
render() {
  const {width,height} = this.getSize();
  const style = this.getInlineStyle();

  return html`
    <svg 
      style="${style}" 
      xmlns="http://www.w3.org/2000/svg" 
      width=${width} 
      height=${height} 
      viewBox="0 0 16 16" fill="none"
    >
      <path d="M7 10L4.40192 5.5L9.59808 5.5L7 10Z" fill="currentColor"/>
    </svg>
  `;
}
```

## Property Table
| name | type | options | default-value | description |
|------|------|---------|---------------|-------------|
| `"size"` | string | `"small","medium","large"` | `"medium"` | size of 
| `"rotate"` | number | - | 0 |
| `"color"` | string | - | - |
| `"width"` | number | - | - |
| `"height"` | number | - | - |


## CSS variables
| name | default-value | description |
|------|---------------|-------------|
| `"--icon-base-color"` | `"#3C3C3C"` | CSS-color value for setting the color of the icon provided its using `fill="currentColor"` |
