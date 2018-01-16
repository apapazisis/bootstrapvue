<h1>Badge</h1>

<h2>How to</h2>

<ul>
    <li><strong>type</strong>: You can select between types which are [badge, contextual, pill, link]. By default is used badge.
        <ul>
            <li>Example:


            <code><bv-badge type="link" href="#">Example link</bv-badge></code>


            </li>
        </ul>
    </il>
    <li><strong>variant</strong>: You can select between variants [primary, secondary, success, danger, warning, info, light, dark] to color the element.
        <ul>
        <li>Example:


        <code><h1>Example heading <bv-badge variant="secondary">New</bv-badge></h1></code>

        </li>
        </ul>
    </li>
    <li><strong>href</strong>: When is used the link then you can define a href property.</li>
</ul>

<h2>Example</h2>

```html
<h1>Example heading <bv-badge variant="secondary">New</bv-badge></h1>
<h2>Example heading <bv-badge variant="secondary">New</bv-badge></h2>
<h3>Example heading <bv-badge variant="secondary">New</bv-badge></h3>
<h4>Example heading <bv-badge variant="secondary">New</bv-badge></h4>
<h5>Example heading <bv-badge variant="secondary">New</bv-badge></h5>
<h6>Example heading <bv-badge variant="secondary">New</bv-badge></h6>
```

<h2>Badge can be used with buttons</h2>

```html
<bv-button>
    Notifications <bv-badge variant="light">4</bv-badge>
</bv-button>
```

```html
<bv-button>
    Notifications <bv-badge variant="light">4</bv-badge>
    <span class="sr-only">unread messages</span>
</bv-button>
```

<h2>Contextual variations</h2>

```html
<bv-badge type="contextual">Example contextual</bv-badge>
```

<h2>Pill badges</h2>

```html
<bv-badge type="pill">Example pill</bv-badge>
```

<h2>Links</h2>

```html
<bv-badge type="link" href="#">Example link</bv-badge>
```







