function fetchCatByBreed (){
    return fetch(`${BASE_URL}/breeds?key=${API_KEY}`)
    .then(resp=>{console.log(resp)
    if(!resp.ok){
    throw new Error(resp.statusText)}
    return resp.json()
    })
    .then((data)=>{console.dir(data)})
    .catch(err=>console.error(Error))
    .finally(()=>console.log('finally'))}