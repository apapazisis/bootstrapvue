<h1>Button Group</h1>

<h2>Properties</h2>

<ul>
    <li><strong>vertical</strong>: The buttons are aligned vertically.</li>
    <li><strong>size</strong>: Size of the group. Default value is small(sm).</li>
    <li><strong>label</strong>: Set the aria-label property of the button-group element.</li>
    <li><strong>space</strong>: Property space is used with toolbar component. <a href="https://github.com/apapazisis/bootstrapvue/tree/development/src/components/button-toolbar">Here</a> an example of button-toolbar with button-group component.</li>
</ul>

<h2>Examples</h2>

```html
<bv-button-group label="Basic example">
    <bv-button variant="success">1</bv-button>
    <bv-button>2</bv-button>
    <bv-button variant="dark">3</bv-button>
</bv-button-group>
```

<h2>Sizes</h2>

Use the property size to change it.

```html
<bv-button-group size="lg" label="Basic example">
    <bv-button variant="success">1</bv-button>
    <bv-button>2</bv-button>
    <bv-button variant="dark">3</bv-button>
</bv-button-group>
```

<h2>Align Vertically</h2>

```html
<bv-button-group vertical size="lg" label="Basic example">
    <bv-button variant="success">1</bv-button>
    <bv-button>2</bv-button>
    <bv-button variant="dark">3</bv-button>
</bv-button-group>
```

<h2>Vue Example</h2>

```vue
<template>
    <div>
        <bv-button-group vertical size="lg" label="Basic example">
            <bv-button variant="success">1</bv-button>
            <bv-button>2</bv-button>
            <bv-button variant="dark">3</bv-button>
        </bv-button-group>
    </div>
</template>

<script>
    import {bvButtonGroup, bvButton} from 'bootstrapvue';

    export default {
        name: 'index',
        components: {
            bvButtonGroup,
            bvButton
        }
    }
</script>
```