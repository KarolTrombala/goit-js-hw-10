import axios from 'axios';
import SlimSelect from 'slim-select';
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
    }
}

function fetchCat (breedId) {
    axios
    .get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId')
   .then(response => {
    const catItemInfo = response.data[0];
    showCat (catItemInfo)
    })
    .catch(error => {
        console.error(error);
      showError();
    }) 
    .finally(() => {
        loader.style.display = 'none';
    }) ;
}

function showCat (catItemInfo) {
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