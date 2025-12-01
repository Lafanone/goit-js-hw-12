import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let currentQuery = '';
let currentPage = 1;
const perPage = 15;

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');
const gallery = document.querySelector('.gallery');

async function fetchImages() {
  showLoader();
  hideLoadMoreButton();
  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    const images = data.hits;
    const totalHits = data.totalHits;
    const totalPages = Math.ceil(totalHits / perPage);
    if (images.length === 0 && currentPage === 1) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      clearGallery();
      return;
    }
    createGallery(images);
    if (currentPage > 1) {
      smoothScroll();
    }
    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
        timeout: 5000,
      });
      hideLoadMoreButton();
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Something went wrong! Please try again later.',
      position: 'topRight',
    });
    clearGallery();
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const newQuery = event.target.elements['search-text'].value.trim();

  if (!newQuery) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }
  currentQuery = newQuery;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  fetchImages();
  form.reset();
});

loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  fetchImages();
});

function smoothScroll() {
  const firstGalleryItem = gallery.firstElementChild;
  if (firstGalleryItem) {
    const cardHeight = firstGalleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
