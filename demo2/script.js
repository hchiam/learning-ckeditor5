// import { Font } from '@ckeditor/ckeditor5-font';
// import Font from '@ckeditor/ckeditor5-font';
// import Font from '@ckeditor/ckeditor5-font/src/font'
// import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';

// import * as Editor from "./ckeditor5/build/ckeditor.js";

let ckeditor;
ClassicEditor.create(document.querySelector("#editor"), {
  // plugins: [ Font ],
  // toolbar: [ 'fontColor' ], // uncommenting this breaks things and throws toolbarview-item-unavailable error
})
  .then((editor) => {
    // console.log(Array.from(
    //   editor.ui.componentFactory.names()
    // ));
    ckeditor = editor;
  })
  .catch((error) => {
    console.error(error);
  });
