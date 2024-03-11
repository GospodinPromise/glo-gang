'use strict';
daysOfWeek = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const ponedelnik = document.querySelector('#pon');
const vtornik = document.querySelector('#vtr');
const sreda = document.querySelector('#srd');
const chetverg = document.querySelector('#cht');
const pyatnica = document.querySelector('#ptn');
const sybbota = document.querySelector('#sbt');
const voskresenie = document.querySelector('#vsk');

ponedelnik.innerHTML = 'Понедельник';
vtornik.innerHTML = 'Вторник';
sreda.innerHTML = 'Среда';
chetverg.innerHTML = 'Четверг';
pyatnica.innerHTML = 'Пятница';
sybbota.innerHTML = 'Суббота';
voskresenie.innerHTML = 'Воскресенье';

sybbota.classList.add('text');
voskresenie.classList.add('text');

let datamoya = new Date().getDay();

if (datamoya === 0) {
    voskresenie.classList.add('jirni');
} else if(datamoya ===1) {
    ponedelnik.classList.add('jirni');
} else if (datamoya===2) {
    vtornik.classList.add('jirni');
} else if (datamoya===3) {
    sreda.classList.add('jirni');
} else if (datamoya===4){
    chetverg.classList.add('jirni');
} else if (datamoya===5) {
    pyatnica.classList.add('jirni');
} else if (datamoya===6) {
    sybbota.classList.add('jirni');
}
