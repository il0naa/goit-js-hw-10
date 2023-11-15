import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
// import '/node_modules/slim-select/dist/slimselect.css';

const selectBreedEl = document.querySelector('.js-breed-select');
const catInfo = document.querySelector('.js-cat-info');
const wrapperEl = document.querySelector('.js-wrapper');

