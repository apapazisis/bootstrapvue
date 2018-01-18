<h1>Card</h1>

<h2>Properties</h2>

<ul>
    <li><strong>title</strong>: The title of the card.</li>
    <li><strong>title-tag</strong>: You can select between (h1, h2,h3, h4, h5, h6) tags to create your title.</li>
    <li><strong>subtitle</strong>: The subtitle of the card.</li>
    <li><strong>subtitle-tag</strong>: You can select between (h1, h2,h3, h4, h5, h6) tags to create your subtitle.</li>
    <li><strong>img-src</strong>: If an image should be included then use then img-src property.</li>
    <li><strong>img-alt</strong>: The alt property of the image.</li>
    <li><strong>img-bottom</strong>: Image will be show at the bottom of the card. By default image is at top of card.</li>
    <li><strong>no-body</strong>: Using this property then you can create on your own the card-body using the component bvCardBody. With this way you can have multiple card-body. See examples.</li>
</ul>

<h2>Body</h2>

```html
<bv-card>
    This is some text within a card body.
</bv-card>
```

Use `no-body` property to disable the default `.card-body` element and add your body on your own using the component `<bv-card-body>`. See example for more.

```html
<bv-card style="max-width: 18rem" no-body>
    <bv-card-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </bv-card-body>
    <bv-card-body title="Card Title" subtitle="Card subtitle">
        <p class="card-text">Some quick example text</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </bv-card-body>
</bv-card>
```


<h2>Titles, text, and links</h2>

```html
<bv-card
    style="max-width: 18rem"
    title="My Title"
    title-tag="h4"
    subtitle="My Subtitle"
    subtitle-tag="h5">
        <p class="card-text">Some quick example text</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
</bv-card>
```

<h2>Images</h2>
<h3>Image by default is at top</h3>

```html
<bv-card
    style="max-width: 18rem"
    img-src="https://github.com/apapazisis/bootstrapvue/blob/development/media/logo.jpg?raw=true"
    img-alt="BootstrapVue"
    title="My Title"
    title-tag="h4"
    subtitle="My Subtitle"
    subtitle-tag="h5">
        <p class="card-text">Some quick example text</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
</bv-card>
```
<h3>Image at Bottom</h3>

```html
<bv-card
    style="max-width: 18rem"
    img-src="https://github.com/apapazisis/bootstrapvue/blob/development/media/logo.jpg?raw=true"
    img-alt="BootstrapVue"
    img-bottom
    title="My Title"
    title-tag="h4"
    subtitle="My Subtitle"
    subtitle-tag="h5">
        <p class="card-text">Some quick example text</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
</bv-card>
```

<h2>Header & Footer</h2>

Define header and footer as properties.

```html
<bv-card
    style="max-width: 18rem"
    header-text="Card header"
    header-tag="div"
    title="My Title"
    subtitle="My Subtitle">
        <p class="card-text">Some quick example text</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
</bv-card>
```

Define header and footer using `slots`.

```html
<bv-card
    style="max-width: 18rem"
    title="My Title"
    subtitle="My Subtitle">
        <div slot="header">Card title</div>
        <div slot="footer" class="text-muted">Card footer</div>
        <p class="card-text">Some quick example text</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
</bv-card>
```
