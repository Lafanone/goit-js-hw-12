import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53374557-3f57f89b9c540f2869ff2907f';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: PER_PAGE,
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images from Pixabay.');
  }
}
