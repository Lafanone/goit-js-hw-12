import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryElement = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');
const loadMoreBtn = document.querySelector(.'loadmorebtn')

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span class="info-item-value">${image.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span class="info-item-value">${image.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span class="info-item-value">${image.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span class="info-item-value">${image.downloads}</span>
          </div>
        </div>
      </li>`;
    })
    .join('');

  galleryElement.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryElement.innerHTML = '';
}

export function showLoader() {
  loaderElement.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderElement.classList.add('is-hidden');
}

export function showLoadMoreButton() {
    loadMoreBtn.classList.remove('is-hidden')
}
export function hideLoadMoreButton() {
    loadMoreBtn.classList.add()
}