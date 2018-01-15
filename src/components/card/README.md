<h1>Content Types</h1>

<h2>Body</h2>

```html
<bv-card>
    This is some text within a card body.
</bv-card>
```

<h2>Titles, text, and links</h2>

```html
<bv-card
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
    img-src="https://github.com/apapazisis/bootstrapvue/blob/development/media/logo.jpg?raw=true"
    img-alt="BootstrapVue"
    bottom
    title="My Title"
    title-tag="h4"
    subtitle="My Subtitle"
    subtitle-tag="h5">
        <p class="card-text">Some quick example text</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
</bv-card>
```

