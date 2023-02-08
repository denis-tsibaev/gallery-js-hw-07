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
        alt=${e.target.alt}
	   />	
    </div>
`);
  instance.show();

  window.addEventListener("keydown", onKeyPressHandler);
}

function onKeyPressHandler(e) {
  if (e.key !== "Escape") {
    console.log("Нажата клавиша", e.key);
    return;
  } else console.log("нажат", e.key);
  modalRemover();
}

function modalRemover() {
  () => instance.close();
  window.removeEventListener("keydown", onKeyPressHandler);
}
