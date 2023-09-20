// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems));

function galleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>
    `
    )
    .join('');
}
