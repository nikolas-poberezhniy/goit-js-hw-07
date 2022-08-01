import { galleryItems } from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.gallery'),
};

function createItemsMarcup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
    )
    .join('');
}

function populateGallery(markup) {
  refs.gallery.innerHTML = markup;
}

const itemsMarcup = createItemsMarcup(galleryItems);

populateGallery(itemsMarcup);

refs.gallery.addEventListener('click', evt => {
  evt.preventDefault();

  const imageOriginalSource = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src=${imageOriginalSource}>
  `,
    {
      onShow: () => {
        console.log('open');
        document.addEventListener('keydown', escClose);
      },
      onСlose: () => {
        console.log('close');
        document.removeEventListener('keydown', escClose);
      },
    }
  );

  instance.show();

  function escClose(e) {
    if (e.code === 'Escape' && instance.visible()) {
      console.log(`Close with Escape`);
      instance.close();
      // document.removeEventListener('keydown', escClose);
    }
  }
});
