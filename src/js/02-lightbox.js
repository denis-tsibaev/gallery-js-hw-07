import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");

galleryItems.map((item) => {
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `
		<a class="gallery__item"
		href=${item.original}>
  		<img class="gallery__image"
		src=${item.preview}
		alt=${item.description}
		 />
		</a>   
	`
  );
});

galleryEl.addEventListener(
  "click",
  new SimpleLightbox(".gallery a", {
    maxZoom: 1.1,
    navText: ["←", "→"],
    captions: true,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  })
);
