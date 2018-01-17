<h1>Button</h1>

<h2>Properties</h2>

<ul>
    <li><strong>type</strong>: The type of the element can be between [button, link, reset, submit, ibutton] selected. The default type is button.</li>
    <li><strong>variant</strong>: You can select between variants [primary, secondary, success, danger, warning, info, light, dark] to color the element.</li>
    <li><strong>size</strong>: The default size of the button is small(sm). Select large size using size="lg" property</li>
    <li><strong>active</strong>: The button will appear pressed.</li>
    <li><strong>disabled</strong>: Button will be disabled.</li>
</ul>

<h2>Events</h2>

<ul>
    <li><strong>click</strong>: Handle Click event</li>
</ul>

<h2>Button tags</h2>

Default tag is Button

```html
<bv-button
    variant="success"
    size="lg"
    active
    disabled>Hallo</bv-button>
```

```html
<bv-button
    type="link"
    variant="success"
    size="lg"
    active
    disabled>Link</bv-button>
```

```html
<bv-button
    type="reset"
    variant="success"
    size="lg"
    value="Input Button Reset"
    active
    disabled></bv-button>
```

```html
  <bv-button
    type="submit"
    variant="success"
    size="lg"
    value="Input Button Submit"
    active
    disabled>Hallo</bv-button>
```

```html
<bv-button
    type="ibutton"
    variant="success"
    size="lg"
    value="Input Button"
    active
    disabled>Hallo</bv-button>
```