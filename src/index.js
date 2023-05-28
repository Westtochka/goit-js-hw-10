// import fetchCatByBreed from '../src/cat-api.js';

const select=document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const catImage = document.getElementById('cat-image');
const catBreed = document.('cat-breed');
const catDescription = document.getElementById('cat-description');
const catTemperament = document.getElementById('cat-temperament');

select.addEventListener('click', fetchCatByBreed);
console.log(select)
const API_KEY='live_AgvW44RRkBoARXNb9CJZhKTjSdlkAhOoBVX0pvtPvud2h88FCArREoa62LESXVz8';
const BASE_URL='https://api.thecatapi.com/v1';

function fetchCatByBreed (){
return fetch(`${BASE_URL}/breeds?key=${API_KEY}`)//отримую доступ до масиву об'єктів. 
.then(resp=>{console.log(resp)
if(!resp.ok){
throw new Error(resp.statusText)}
return resp.json()
})
.then((data)=>data.map(breed=>({ id: breed.id, name: breed.name })))// data-це кожен об'єкт  масиву, призначаємо його властивостям свої імена
.catch(err=>console.error(Error))
.finally(()=>console.log('finally'))}

function fetchCatByBreed(breedId)
 {
return fetch(`${BASE_URL}/breeds?key=${API_KEY}&breed_ids=${breedId}`)
      .then(response => response.json())
      .then(data => data[0])
      .catch(error => {
        console.error('Error fetching cat:', error);
        throw error;
      });
  }


getElementById