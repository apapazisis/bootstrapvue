```html
<bv-card
    no-body>
    <h5 slot="header">
        <a href="#">asd</a>
    </h5>
    <bv-card-body title="til1" subtitle="sub1">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </bv-card-body>
</bv-card>
```

```html
<bv-card
    header-tag="div"
    header-class="text-center"
    title="til1"
    subtitle="sub1">
        <h5 slot="header">
            <a href="#">asd</a>
        </h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        <div slot="footer">
            edo to footer
        </div>
</bv-card>
```
