function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o),o.register("9dxg1",(function(r,t){e(r.exports,"fetchBreeds",(function(){return o})),e(r.exports,"fetchCatByBreed",(function(){return i}));const n="live_AgvW44RRkBoARXNb9CJZhKTjSdlkAhOoBVX0pvtPvud2h88FCArREoa62LESXVz8";function o(){return fetch(`https://api.thecatapi.com/v1/breeds?x-api-key=${n}`).then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>e.map((e=>({id:e.id,name:e.name}))))).catch((e=>console.error(Error))).finally((()=>console.log("finally")))}function i(e){return fetch(`https://api.thecatapi.com/v1/images/search?x-api-key=${n}&breed_ids=${e}`).then((e=>e.json())).then((e=>e[0])).catch((e=>{throw console.error("Error fetching cat:",e),e}))}})),o("9dxg1");
//# sourceMappingURL=index.0270e7c8.js.map
