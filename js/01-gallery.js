import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulContainer = document.querySelector('.gallery');

let liItem = '';
galleryItems.map(({ preview, original, description }) => {
  liItem += `
    <li class="gallery__item">
         <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
    `;
});
ulContainer.innerHTML = liItem;

let instance;
ulContainer.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();

  instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">`);
  instance.show();
  document.addEventListener('keydown', onKeyboardPress);
}

function onKeyboardPress(evt) {
  console.log(evt.code);
  if (evt.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onKeyboardPress);
  }
}
