'use strict'
function zamikanie () {
const randomNumber = 34;
aboba();
function aboba () {
    let question = prompt('Угадай число от 1 до 100');
    if (question > randomNumber) {
        alert('Загаданное число меньше');
        aboba ();
    } else if ( question < randomNumber && question != null) {
        alert('Загаданное число больше');
        aboba ();
    } else if (!isNaN(question) === false) {
        alert('Введите число');
        aboba ();
    }else if (+question === +randomNumber) {
        alert ('Это верное число!');
    }
}}
zamikanie();
