const perviPi = document.querySelector('.pervipi')
const vtoroiiPi = document.querySelector('.vtoroipi')


function abobys (){
    vtoroiiPi.innerHTML = new Date().toLocaleString()
}
abobys()
setInterval(abobys,1000)


let d = new Date();
const monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
monthA[d.getMonth()]
const dayOfWeek = 'воскресенье,понедельник,вторник,среда,четверг,пятница,суббота'.split(',')
dayOfWeek[d.getDay()]


function vabobys () {
    perviPi.innerHTML = 'Cегодня ' + dayOfWeek[d.getDay()] + ',' + new Date().getDate() + ' ' + monthA[d.getMonth()] + ' ' +  new Date().getFullYear() + ', ' + d.getHours() + ' ' + vitalcho()+ ' ' + new Date().getMinutes()+ ' ' +vitalcho2()+ ' '+ new Date().getSeconds()+ ' ' + vitalcho3()
}
vabobys()
setInterval(vabobys,1000)

function vitalcho () {
    if (new Date().getHours() === 1){
        return 'Час'
    } else if (new Date().getHours() < 5) {
        return 'Часа'
    } else if (new Date().getHours() === 21) {
        return 'Час'
    } else if (new Date().getHours() > 21){
        return 'Часа'
    } else  {
        return 'Часов'
    }
}

function vitalcho2() {
    let popka = new Date().getMinutes() 
    popka = popka + ''
    if (popka[1]==='1'){
        return 'Минута'
    }else if (popka[1] < 5 && popka[1] != 0){
        return 'Минуты'} 
    else if (popka.length < 2){
        if (popka[0] === '1'){
            return 'Минута'
        } else if (popka[0] < 5 && popka[0] != 0) {
            return 'Минуты'
        } else {
            return 'Минут'
        }
    } else {
        return 'Минут'
    }
}

function vitalcho3() {
    let popka = new Date().getSeconds() 
    popka = popka + ''
    if (popka[1]==='1'){
        return 'Cекунда'
    }else if (popka[1] < 5 && popka[1] != 0){
        return 'Секунды'} 
    else if (popka.length < 2){
        if (popka[0] === '1'){
            return 'Секунда'
        } else if (popka[0] < 5 && popka[0] != 0) {
            return 'Секунды'
        } else {
            return 'Секунд'
        }
    } else {
        return 'Секунд'
    }
}
