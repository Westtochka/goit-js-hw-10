import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.getElementById('breed-select');
const catInfo = document.querySelector('.cat-info');
const img= document.querySelector('.cat-image')
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const form = document.querySelector('form');

breedSelect.addEventListener('change', handleBreedSelect);
window.addEventListener('load', init);

error.style.display = 'none';
loader.style.display = 'block';

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
      loader.style.display = 'none';
    })
    .catch(() => {
      showError();
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
  return `<img width=300 id="cat-image" src="${url}" alt="Cat">
  <div id="cat-details">
    <h2 id="description, temperamentcat-breed">${name}</h2>
    <p id="cat-description">${description}</p>
    <p id="cat-temperament"><span>Temperament:</span> ${temperament}</p>
  </div>`
  
}

function addMarkup(markup = '', elem) {
elem.innerHTML = markup;  
}

function handleBreedSelect() {
  const breedId = breedSelect.value;
  loader.style.display = 'block';

fetchCatByBreed (breedId)
.then(cat => {
  const markup = createCard(cat);
  addMarkup(markup, catInfo);
  error.style.display = 'none';
  loader.style.display = 'none';
})
.catch(() => {
  showError();
  // 
  form.reset()
  breedSelect.value = "";
  // catInfo.style.display = 'none';
  // form.reset()
  // form.style.display = 'none';
  // breedSelect.style.display = 'block';
  addMarkup(markup = '', catInfo)
});}

function showError() {
  error.style.display = 'block';
  loader.style.display = 'none';
  
}


