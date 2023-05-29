const API_KEY='live_AgvW44RRkBoARXNb9CJZhKTjSdlkAhOoBVX0pvtPvud2h88FCArREoa62LESXVz8';
const BASE_URL='https://api.thecatapi.com/v1';

export function fetchBreeds (){
        return fetch(`${BASE_URL}/breeds?x-api-key=${API_KEY}`)//отримую доступ до масиву об'єктів. 
        .then(resp=>{console.log(resp)
        if(!resp.ok){
        throw new Error(resp.statusText)}
        return resp.json()
        })
        .then((data)=>data.map(breed=>({ id: breed.id, name: breed.name })))// data-це кожен об'єкт  масиву, призначаємо його властивостям свої імена
        .catch(err=>console.error(Error))
        .finally(()=>console.log('finally'))}
        
        
export function fetchCatByBreed (breedId){
        //  return fetch(`https://api.thecatapi.com/v1/images/${breedId}`)
        // return fetch(`https://api.thecatapi.com/v1/images?${breedId}&x-api-key=${API_KEY}`)
        // https://api.thecatapi.com/v1/images/${breedId}
        return fetch(`https://api.thecatapi.com/v1/images/search?x-api-key=${API_KEY}&breed_ids=${breedId}`)
          .then(response => response.json())
              .then(data => data[0])
              .catch(error => {
                console.error('Error fetching cat:', error);
                throw error;
              });
          }


