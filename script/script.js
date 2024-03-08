// ПЕРВОЕ ЗАДАНИЕ

'use strict'
const language = confirm('ДА - RU, НЕТ - ENG');
const DaysOfWeek = {
    ru : ' Понедельник \n Вторник \n Среда \n Четверг \n Пятница',
    en : ' Monday \n Tuesday \n Wednesday \n Friday \n Saturday'
};

let plusOrMinus = [];

if (language === true) {
    console.log(String(DaysOfWeek.ru));
    plusOrMinus.push(String(DaysOfWeek.ru));
} else if (language === false) {
    console.log(String(DaysOfWeek.en));
    plusOrMinus.push(String(DaysOfWeek.en));
}

switch (language) {
    case true:
        console.log(String(DaysOfWeek.ru));
        break;
    case false:
        console.log(String(DaysOfWeek.en));
        break;
}

console.log(String(plusOrMinus));

// ВТОРОЕ ЗАДАНИЕ 

const namePerson = prompt('Введите имя');
function maxim () {namePerson === 'Максим' ? console.log('преподаватель') : namePerson === 'Артем' ? console.log('директор') : console.log('студент')};
maxim ()
