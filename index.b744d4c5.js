var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var i=r("9dxg1");const o=document.getElementById("breed-select"),d=document.querySelector(".cat-info"),a=(document.querySelector(".cat-image"),document.querySelector(".loader")),l=document.querySelector(".error"),c=document.querySelector("form");function s(e="",n){n.innerHTML=e}function p(){const e=o.value;a.style.display="block",(0,i.fetchCatByBreed)(e).then((e=>{s(function({url:e="",breeds:[{description:n="",temperament:t="",name:r=""}]}={}){return`<img width=300 id="cat-image" src="${e}" alt="Cat">\n  <div id="cat-details">\n    <h2 id="description, temperamentcat-breed">${r}</h2>\n    <p id="cat-description">${n}</p>\n    <p id="cat-temperament"><span>Temperament:</span> ${t}</p>\n  </div>`}(e),d),l.style.display="none",a.style.display="none"})).catch((()=>{u(),o.value="",d.innerHTML="",c.reset()}))}function u(){l.style.display="block",a.style.display="none"}o.addEventListener("change",p),window.addEventListener("load",(function(){(0,i.fetchBreeds)().then((e=>{s(function(e=[]){return e.map((({reference_image_id:e,name:n})=>`<option value="${e}">${n}</option>`)).join("")}(e),o),a.style.display="none"})).catch((()=>{u()})),o.addEventListener("change",p)})),l.style.display="none",a.style.display="block";
//# sourceMappingURL=index.b744d4c5.js.map
