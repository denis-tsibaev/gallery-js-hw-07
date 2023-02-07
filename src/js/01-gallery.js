import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basicLightbox";

const galleryEl = document.querySelector(".gallery");

galleryItems.map((item) => {
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `
	<div class="gallery__item">
    <a class="gallery__link" href=#>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>
  `
  );
});

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  //   console.log(e.target.dataset.source);
  //   console.log(e.target.alt);
  const instance = basicLightbox.create(`
    <div class="modal">
       <img
	    src=${e.target.dataset.source}      
        alt=${e.target.description}
	   />	
    </div>
`);
  instance.show();
}
