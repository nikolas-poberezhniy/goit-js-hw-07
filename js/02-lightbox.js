import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

function createItemsMarcup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item"  href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

function populateGallery(markup) {
  refs.gallery.innerHTML = markup;
}

const itemsMarcup = createItemsMarcup(galleryItems);

populateGallery(itemsMarcup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
gallery.on("show.simplelightbox", function () {});
