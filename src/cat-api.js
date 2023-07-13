import axios from 'axios';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}