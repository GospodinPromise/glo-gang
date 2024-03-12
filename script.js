"use strict";
const nigga = document.querySelectorAll(".book");
const body = document.querySelector("body");
const textik = document.querySelectorAll(['[target="_blank"]']);
const reklama = document.querySelector(".adv");
const lishki = document.querySelectorAll("li");
const lishka = document.createElement("li");
console.log(nigga);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
nigga[0].before(nigga[1]);
nigga[0].after(nigga[4]);
nigga[4].after(nigga[5]);
nigga[5].before(nigga[3]);

textik[4].textContent = "Книга 3. this и Прототипы Объектов";

reklama.remove();

lishki[1].insertAdjacentElement("beforeend", lishki[3]);
lishki[1].insertAdjacentElement("beforeend", lishki[6]);
lishki[1].insertAdjacentElement("beforeend", lishki[8]);
lishki[1].insertAdjacentElement("beforeend", lishki[4]);

lishki[47].insertAdjacentElement("beforeend", lishki[55]);
lishki[47].insertAdjacentElement("beforeend", lishki[49]);
lishki[47].insertAdjacentElement("beforeend", lishki[50]);
lishki[56].insertAdjacentElement("beforeend", lishki[51]);

lishka.textContent = "Глава 8: За пределами ES6";
lishki[25].insertAdjacentElement("afterend", lishka);
