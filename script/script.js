'use strict'
let randomNumber = getRandomInt(0,100);
function zamikanie () {
let popitki = 10;
aboba();
function aboba () {
    let question = prompt('Угадай число от 1 до 100');
    if (question > randomNumber) {
        popitki -= 1 
            if (popitki>0){
                alert('Загаданное число меньше.Осталось попыток ' + popitki);
                aboba ();
            } else {daNet(false)}
    } else if ( question < randomNumber && question != null) {
        popitki -= 1 
            if (popitki>0){
                alert('Загаданное число больше.Осталось попыток ' + popitki);
                aboba ();
            } else {daNet(false)}
    } else if (!isNaN(question) === false) {
        alert('Введите число');
        aboba ();
    }else if (+question === +randomNumber) {
        alert ('Это верное число!');
    }else {
        alert ('Прощальное сообщение');
    }
}}
zamikanie();

function daNet (a) {
    if (a === true){
        let daDa = confirm('Поздравляю! Хотели бы сыграть еще ?');
        if (daDa=== true){
            zamikanie();
        }
    } else if (a === false) {
        let daDa = confirm('Попытки закончились, хотите сыграть еще?');
        if (daDa === true){
            zamikanie();
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
