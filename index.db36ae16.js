var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("9dxg1");const i=document.getElementById("breed-select"),d=document.querySelector(".cat-info"),a=(document.querySelector(".cat-image"),document.querySelector(".loader")),l=document.querySelector(".error"),c=document.querySelector("form");function s(e="",n){n.innerHTML=e}function p(){const e=i.value;a.style.display="block",(0,o.fetchCatByBreed)(e).then((e=>{s(function({url:e="",breeds:[{description:n="",temperament:t="",name:r=""}]}={}){return`<img width=300 id="cat-image" src="${e}" alt="Cat">\n  <div id="cat-details">\n    <h2 id="description, temperamentcat-breed">${r}</h2>\n    <p id="cat-description">${n}</p>\n    <p id="cat-temperament"><span>Temperament:</span> ${t}</p>\n  </div>`}(e),d),l.style.display="none",a.style.display="none"})).catch((()=>{u(),c.reset(),i.value="",s(markup="",d)}))}function u(){l.style.display="block",a.style.display="none"}i.addEventListener("change",p),window.addEventListener("load",(function(){(0,o.fetchBreeds)().then((e=>{s(function(e=[]){return e.map((({reference_image_id:e,name:n})=>`<option value="${e}">${n}</option>`)).join("")}(e),i),a.style.display="none"})).catch((()=>{u()})),i.addEventListener("change",p)})),l.style.display="none",a.style.display="block";
//# sourceMappingURL=index.db36ae16.js.map
