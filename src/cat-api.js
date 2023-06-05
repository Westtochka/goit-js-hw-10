const API_KEY='live_AgvW44RRkBoARXNb9CJZhKTjSdlkAhOoBVX0pvtPvud2h88FCArREoa62LESXVz8';
const BASE_URL='https://api.thecatapi.com/v1';

export function fetchBreeds (){
        return fetch(`${BASE_URL}/breeds?x-api-key=${API_KEY}`)
        .then(resp=>{console.log(resp)
        if(!resp.ok){
        throw new Error(resp.statusText)}
        return resp.json()
        });}
    
        
export function fetchCatByBreed (breedId){
        return fetch(`https://api.thecatapi.com/v1/images/${breedId}`).then(
          response => {
            if(!response.ok){
              throw new Error(response.statusText);
            }
            return response.json();
          }
          )}


