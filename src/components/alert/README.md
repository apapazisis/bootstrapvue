<h1>Alert</h1>

<h2>How to</h2>

<ul>
    <li><strong>variant</strong>:You can select between variants [primary, secondary, success, danger, warning, info, light, dark] to color the element.</li>
    <li><strong>show</strong>: When this property is added then your alert will be shown.</li>
    <li><strong>timeout</strong>: Alert can be auto-closed after some time in seconds.</li>
</ul>

```html
<bv-alert
    variant="success"
    show
    :timeout="2">
    This is a success alert—check it out!
</bv-alert>
```