import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_KZNqPaZLIqp6ZlhsPgRMapnL4XgHVPp9ogre63NkeXfVrj13nob00xbvpsdPBwU7';
  
  const baseURL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/breeds';
  const END_POINT_ID = '/images/search?';


  export function fetchBreeds() {
    return axios.get(baseURL + END_POINT).then(res => res.data);
  }
  
  export function fetchCatByBreed(breedId) {
    const PARAMS = new URLSearchParams({
      breed_ids: breedId,
    });
    const url = END_POINT_ID + PARAMS;
    return axios.get(url).then(res => res.data);
  }
  