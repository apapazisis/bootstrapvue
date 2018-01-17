<h1>Alert</h1>

<h2>Properties</h2>

<ul>
    <li><strong>variant</strong>:You can select between variants [primary, secondary, success, danger, warning, info, light, dark] to color the element.</li>
    <li><strong>show</strong>: When this property is added then your alert will be shown.</li>
    <li><strong>timeout</strong>: Alert can be auto-closed after some time in seconds.</li>
    <li><strong>dismiss</strong>: A close button will be show.</li>
</ul>

<h2>Examples</h2>

The alert will be shown and after 2 seconds will be auto dismissed.

```html
<bv-alert
    variant="success"
    show
    :timeout="2">
    This is a success alert—check it out!
</bv-alert>
```

<h2>Link Color</h2>

```html
<bv-alert variant="primary" show>
    Lorem ipsum dolor sit amet, <a href="#" class="alert-link">consetetur sadipscing</a>. elitr.
</bv-alert>
```

<h2>Additional Content</h2>

```html
<bv-alert show variant="success">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
    <hr>
    <p class="mb-0">At vero eos et accusam et justo duo doloreum dolor.</p>
</bv-alert>
```

<h2>Dismissing Alert</h2>

The close(X) button will be show so that the user can close on its own the alert.

```html
<bv-alert show dismiss>
    <strong>Lorem ipsum dolor sit amet!</strong> elitr, sed diam nonumy eirmod.
</bv-alert>
```

<h2>Timeout Dismissing Alert</h2>

The alert will be auto-dismissed after 3 seconds.

```html
<bv-alert show timeout="3">
    <strong>Lorem ipsum dolor sit amet!</strong> elitr, sed diam nonumy eirmod.
</bv-alert>
```

<h2>Vue Example</h2>

```vue
<template>
    <div>
        <bv-alert :show="alert">
            <strong>Lorem ipsum dolor sit amet!</strong> elitr, sed diam nonumy eirmod.
        </bv-alert>

        <bv-button @click="showAlert" variant="success">Test</bv-button>
    </div>
</template>

<script>
    import {bvAlert, bvButton} from 'bootstrapvue';

    export default {
        name: 'mycomponent',
        data: () => ({
            alert: false
        }),
        components: {
            bvAlert,
            bvButton
        },
        methods: {
            showAlert() {
                this.alert = !this.alert;
            }
        }

    }
</script>
```