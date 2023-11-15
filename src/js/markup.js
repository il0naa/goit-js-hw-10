export function breedMarkup({ url, breeds }) {
    return `<img src="${url}" alt="${breeds[0].name}" width="60%" height="auto">
    <div>
    <h2 class=cat-info-section>${breeds[0].name}</h2>
    <p class=cat-info-text>${breeds[0].description}</p>
    <p class=cat-info-text>${breeds[0].temperament}</p></div>`;
  }