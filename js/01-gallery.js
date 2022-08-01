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

refs.gallery.innerHTML = createItemsMarcup(galleryItems);

refs.gallery.addEventListener('click', openModaWindow);

function openModaWindow(evt) {
  evt.preventDefault();
  const imageOriginalSource = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imageOriginalSource}" width="1280">
  `,
    {
      onShow: () => {
        console.log('open');
        document.addEventListener('keydown', escClose);
      },
      onClose: () => {
        console.log('close');
        document.removeEventListener('keydown', escClose);
      },
    }
  );

  function escClose(e) {
    if (e.code === 'Escape' && instance.visible()) {
      console.log(`Close with Escape`);
      instance.close();
      // document.removeEventListener('keydown', escClose);
    }
  }
  instance.show();
}
