import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

console.log(galleryItems);

const markup = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
    <a class="gallery__link"
     href="${galleryItem.original}">
     <img class="gallery__image"
     src="${galleryItem.preview}"
     data-source="${galleryItem.original}"
     alt="${galleryItem.description}" />
</a></div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);


gallery.onclick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    } else {
      basicLightbox
        .create(
          `
     <img width="1400" height="900" src="${event.target.dataset.source}">
    `
        )
        .show();
    }
};

