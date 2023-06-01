import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.getElementById('breed-select');
const catInfo = document.querySelector('.cat-info');

const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

breedSelect.addEventListener('change', handleBreedSelect);
window.addEventListener('load', init);
//
function init() {
  populateBreeds();
  breedSelect.addEventListener('change', handleBreedSelect);//слухач за вибором породи в селекті
}
//запит з беку, const markup це підстановка даних беку в ф-ію створення розмітки опшинс, 
function populateBreeds() {
  fetchBreeds()
    .then(breeds => {
      const markup = createOptions(breeds);
      addMarkup(markup, breedSelect);//
      // breedSelect.removeAttribute('disabled');
      // loader.style.display = 'none';
    })
    .catch(() => {
      showError();
      loader.style.display = 'none';
    });
}
//перебирає кожен елемент(обєкт) масиву, що прийшов і бере властивості і вставляє їх в розмітку-це масив, збирає масив в строку.
function createOptions(data=[]){
return data
.map(({reference_image_id, name})=>{
  return `<option value="${reference_image_id}">${name}</option>`;
}).join('');
}
//створеня розмітки для інформації про обраного кота, 
function createCard({
  url = '',
  breeds: [{ description = '', temperament = '', name = '' }],
} = {}) {
  return `<img id="cat-image" src="${url}" alt="Cat">
  <div id="cat-details">
    <h2 id="description, temperamentcat-breed">${name}</h2>
    <p id="cat-description">${description}</p>
    <p id="cat-temperament"><span>Temperament:</span> ${temperament}</p>
  </div>`
}

function addMarkup(markup = '', elem) {
  elem.innerHTML = markup;
}
//
function handleBreedSelect() {
  const breedId = breedSelect.value;
fetchCatByBreed (breedId)
.then(cat => {
  const markup = createCard(cat);//
  addMarkup(markup, catInfo);
  // catInfo.style.display = 'block';
  loader.style.display = 'none';
})
.catch(() => {
  showError();
  loader.style.display = 'none';
});}
function showError() {
  error.style.display = 'block';
}

loader.style.display = 'block';
