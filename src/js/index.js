import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { breedMarkup } from './markup'

const selectBreedEl = document.querySelector('.js-breed-select');
const catInfo = document.querySelector('.js-cat-info');
const wrapperEl = document.querySelector('.js-wrapper');

firstDownload();

function firstDownload() {
    wrapperEl.classList.remove('is-hidden');
    fetchBreeds()
        .then(data => {
            const options = data.map(breed => {
                const option = document.createElement('option');
                option.textContent = breed.name;
                option.value = breed.id;
                return option;
            });

            selectBreedEl.append(...options);

            new SlimSelect({
                select: selectBreedEl,
            });
        })
        .catch(onError)
        .finally(() => {
            wrapperEl.classList.add('is-hidden');
        });
}

selectBreedEl.addEventListener('change', changeBreed);

function changeBreed(e) {
  let breedIdCat = e.target.value;
  wrapperEl.classList.remove('is-hidden');
  fetchCatByBreed(breedIdCat)
    .then(data => {
      const markup = breedRender(data);
      catInfo.innerHTML = markup;
    })
    .catch(() => {
      onError;
    })
    .finally(() => {
      wrapperEl.classList.add('is-hidden');
    });
}

function breedRender(breeds) {
  return breeds.map(breedMarkup).join('');
}

function onError() {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  }