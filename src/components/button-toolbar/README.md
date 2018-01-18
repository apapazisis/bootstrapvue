<h1>Button Toolbar</h1>

<h2>Properties</h2>

<ul>
    <li><strong>label</strong>: Set the aria-label property of the button-toolbar element.</li>
</ul>

<h2>Examples</h2>

```html
<bv-button-toolbar label="Toolbar example">
    <bv-button-group :space="2" label="Basic example 1">
        <bv-button>1</bv-button>
        <bv-button>2</bv-button>
        <bv-button>3</bv-button>
    </bv-button-group>
    <bv-button-group :space="3" label="Basic example 2">
        <bv-button variant="success">4</bv-button>
        <bv-button variant="success">5</bv-button>
        <bv-button variant="success">6</bv-button>
    </bv-button-group>
    <bv-button-group label="Basic example 3">
        <bv-button variant="dark">7</bv-button>
        <bv-button variant="dark">8</bv-button>
        <bv-button variant="dark">9</bv-button>
    </bv-button-group>
</bv-button-toolbar>
```

<h2>Vue Example</h2>

```vue
<template>
    <div>
        <bv-button-toolbar label="Toolbar example">
            <bv-button-group :space="2" label="Basic example 1">
                <bv-button>1</bv-button>
                <bv-button>2</bv-button>
                <bv-button>3</bv-button>
            </bv-button-group>
            <bv-button-group :space="3" label="Basic example 2">
                <bv-button variant="success">4</bv-button>
                <bv-button variant="success">5</bv-button>
                <bv-button variant="success">6</bv-button>
            </bv-button-group>
            <bv-button-group label="Basic example 3">
                <bv-button variant="dark">7</bv-button>
                <bv-button variant="dark">8</bv-button>
                <bv-button variant="dark">9</bv-button>
            </bv-button-group>
        </bv-button-toolbar>
    </div>
</template>

<script>
    import {bvButtonToolbar, bvButtonGroup, bvButton} from 'bootstrapvue';

    export default {
        name: 'index',
        components: {
            bvButtonToolbar,
            bvButtonGroup,
            bvButton
        }
    }
</script>
```