# Tooltip

A lightweight JavaScript library for showing simple hover and touch-driven tooltips on elements.

## Installation

Include the following file in your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/mfrancis95/tooltip/tooltip.min.js"></script>
```

## Basic Usage

Add the `tooltipper` class to any element that should show a tooltip:

```html
<span class="tooltipper" aria-label="Tooltip text"></span>
```

The library will use `data-text` when present, and fall back to `aria-label` if it is not.

## Configuration Options

Configure tooltip behavior using data attributes on your elements:

### `data-text`

Specifies the text content to show inside the tooltip.

- **Type:** String
- **Default:** Uses the element's `aria-label`
- **Example:**

```html
<span class="tooltipper" data-text="JavaScript"></span>
```

### `data-delay`

Controls how long to wait before showing the tooltip, in milliseconds.

- **Type:** Number (as string)
- **Default:** `1000`
- **Example:**

```html
<span class="tooltipper" aria-label="Immediate tooltip" data-delay="0"></span>
<span class="tooltipper" aria-label="Delayed tooltip" data-delay="500"></span>
```

## Basic Styling

The script creates a child element with the `tooltip` class when active. You are expected to style it in CSS:

```css
.tooltipper {
  position: relative;
}

.tooltip {
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
}
```