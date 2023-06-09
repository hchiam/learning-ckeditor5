# demo2

online builder output unzipped and made into subfolder and ran npm install on folder

Try uncommenting/commenting these 2 in index.html:

```html
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor5/38.0.1/ckeditor.min.js"></script> -->

<script src="./ckeditor5/build/ckeditor.js"></script>
```

then run `npm run dev` (`parcel index.html`) versus `npm run open` (`open index.html`)
