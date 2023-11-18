export function catInfoMarkup([{ breeds:[{name,description}], url }]) {
    return `<img
    class="fit-picture"
    src="${url}"
    alt="${name}"
  />
  <h2 class="title-descrip">${name}</h2>
  <p class="text-descrip">${description}</p>`;
  }