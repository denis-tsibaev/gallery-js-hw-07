import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");

galleryItems.map((item) => {
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `
	<div class="gallery__item">
    <a class="gallery__link" href=#>
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
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
  //   console.log(e.target.nodeName);

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <div class="modal">
       <img
	    src="${e.target.dataset.source}"
        alt="${e.target.alt}"
	   />
    </div>
`,
    {
      /*
       * Function that gets executed before the lightbox will be shown.
       * Returning false will prevent the lightbox from showing.
       */
      onShow: (instance) => {
        window.addEventListener("keydown", onKeyPressHandler);
      },
      /*
       * Function that gets executed before the lightbox closes.
       * Returning false will prevent the lightbox from closing.
       */
      onClose: (instance) => {
        window.removeEventListener("keydown", onKeyPressHandler);
      },
    }
  );

  instance.show();

  function onKeyPressHandler(e) {
    if (e.key !== "Escape") {
      console.log("Нажата клавиша", e.key);
      return;
    } else console.log("нажат", e.key);
    instance.close();
  }
}
