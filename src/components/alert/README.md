<h1>Alert</h1>

<h2>How to</h2>

<ul>
    <li><strong>variant</strong>:You can select between variants [primary, secondary, success, danger, warning, info, light, dark] to color the element.</li>
    <li><strong>show</strong>: When this property is added then your alert will be shown.</li>
    <li><strong>timeout</strong>: Alert can be auto-closed after some time in seconds.</li>
</ul>

<h2>Examples</h2>

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
    This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</bv-alert>
```

<h2>Additional Content</h2>

```html
<bv-alert variant="success">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</bv-alert>
```

<h2>Dismissing Alert</h2>

```html
<bv-alert show dismiss>
    <strong>Dismissing alert!</strong> Close alert by clicking the button.
</bv-alert>
```