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
    Lorem ipsum dolor sit amet, <a href="#" class="alert-link">consetetur sadipscing</a>. elitr, sed diam nonumy eirmod.
</bv-alert>
```

<h2>Additional Content</h2>

```html
<bv-alert show variant="success">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
    <hr>
    <p class="mb-0">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
</bv-alert>
```

<h2>Dismissing Alert</h2>

```html
<bv-alert show dismiss>
    <strong>Lorem ipsum dolor sit amet!</strong> elitr, sed diam nonumy eirmod.
</bv-alert>
```