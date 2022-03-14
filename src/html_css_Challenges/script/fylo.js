const size = [1000, 1500, 2000, 3000, 4000, 5000];
const i = Math.floor(Math.random() * 6);
const maxStorage = size[i];
const usedStorage = maxStorage * Math.random();
const freeStorage = maxStorage - usedStorage;

const maxStorageHTML = document.getElementById("maxStorage");
maxStorageHTML.innerText = maxStorage + " GB";

const usedStorageHTML = document.getElementById("usedStorage");
usedStorageHTML.innerText = Math.floor(usedStorage) + " GB";

const freeStorageHTML = document.getElementById("freeStorage");
freeStorageHTML.innerText = Math.floor(freeStorage);

const progressBar = document.querySelector(".progress-bar-color");
progressBar.style.width = ((usedStorage / maxStorage) * 100).toString() + "%";

console.log(maxStorage, usedStorage, freeStorage);
