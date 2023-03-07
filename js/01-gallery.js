import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

console.log(galleryItems);
galleryItems.forEach((item) => {
    const galleryItem = `<div class="gallery__item">
    <a class="gallery__link"
     href="${item.original}">
     <img class="gallery__image"
     src="${item.preview}"
     data-source="${item.original}"
     alt="${item.description}" />
</a></div>`
    gallery.insertAdjacentHTML('beforeend', galleryItem);

});
gallery.onclick = (event) => {
    event.preventDefault();
    basicLightbox.create(`
     <img width="1400" height="900" src="${event.target.dataset.source}">
    `).show()
}
