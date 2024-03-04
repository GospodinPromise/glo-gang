// ПЕРВОЕ ЗАДАНИЕ

'use strict'
const language = confirm('ДА - RU, НЕТ - ENG');
const lang = language===true ? 'ru' : 'en';
const ruDaysOfWeek = ' Понедельник \n Вторник \n Среда \n Четверг \n Пятница';
const enDaysOfWeek = ' Monday \n Tuesday \n Wednesday \n Friday \n Saturday';
let PlusOrMinus = [];

if (lang === 'ru') {
    console.log(ruDaysOfWeek);
    PlusOrMinus.push(ruDaysOfWeek);
} else if (lang === 'en') {
    console.log(enDaysOfWeek);
    PlusOrMinus.push(enDaysOfWeek);
}

switch (lang) {
    case 'ru':
        console.log(ruDaysOfWeek);
        break;
    case 'en':
        console.log(enDaysOfWeek);
        break;
}

console.log(String(PlusOrMinus));

// ВТОРОЕ ЗАДАНИЕ 

const namePerson = prompt('Артем или Максим или Другое значение?');
const maxim = namePerson === 'Максим' ? console.log('преподаватель') : namePerson === 'Артем' ? console.log('директор') : console.log('студент');
