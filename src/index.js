import axios from 'axios';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] =
  'live_ll4GIjvo9ClYsMVe1gwe9R5jiQQNgNMPwreF7lvehA0lqTrAYQERaVkPMedGtuFB';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo =document.querySelector('.cat-info');

