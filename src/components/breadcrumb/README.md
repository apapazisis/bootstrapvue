<h1>Breadcrumb</h1>

<h2>Properties</h2>

<ul>
    <li><strong>items</strong>: The items which will be shown. See example for the definition</li>
</ul>

<h2>Examples</h2>

```html
<bv-breadcrumb :items="items"></bv-breadcrumb>
```

<h2>Vue Example</h2>

```vue
<template>
    <div>
        <bv-breadcrumb :items="items"></bv-breadcrumb>
    </div>
</template>

<script>
    import {bvBreadcrumb} from 'bootstrapvue';

    export default {
        name: 'index',
        data: () => ({
            items: [
                {
                    text: 'Home',
                    href: 'tohome'
                },
                {
                    text: 'Users',
                    href: 'tousers'
                },
                {
                    text: 'Management',
                    active: true
                }
            ]
        }),
        components: {
            bvBreadcrumb
        }
    }
</script>
```