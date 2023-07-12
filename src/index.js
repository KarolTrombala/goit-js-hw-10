import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_ll4GIjvo9ClYsMVe1gwe9R5jiQQNgNMPwreF7lvehA0lqTrAYQERaVkPMedGtuFB';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

breedSelect.addEventListener('change', selectCat);

function selectCat (e) {
    const breedId = e.target.value;
    if(breedId) {
        loader.style.display = 'block';
        error.style.display = 'none';
        fetchCat();
    } else {
        loader.style.display = 'none';
    }
}

function fetchCat() {
fetchCatByBreed(breeId)
   .then(response => {
    const catItemInfo = response.data[0];
    showCat (catItemInfo)
    })
    .catch(error => {
        Notiflix.Notify.failure('Upps! Coś poszło nie tak. Odśwież stronę jeszcze raz.');
        return error;
    }) 
    .finally(() => {
        loader.style.display = 'none';
    });
}

function showCat(catItemInfo) {
    const { name, description, temperament } = catInfo.breeds[0];
  const { url } = catInfo;
  const catInfoHTML = `
    <div>
    <img  src="${url}" alt="">
      <h2>${name}</h2>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Temperament:</strong> ${temperament}</p>
    </div>
  `;

  catInfo.innerHTML = catInfoHTML;
  catInfo.style.display = 'block';
}

function fillCatList(breeds) {
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  }

  function initCatApp () {
      fetchBreeds()
      .then(response => {
        const breeds = response.data;
        fillCatList(breeds);
        var select = new SlimSelect({
            select: '.breed-select',
          });
          Notiflix.Notify.info(
            'Wybierz rasę z listy, aby wyświetlić więcej informacji.'
          );
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        loader.style.display = 'none';
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
        initCatApp();
      });