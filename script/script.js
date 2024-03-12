'use strict'
const inputLag = document.querySelector('#input')
const button = document.querySelector('#btn')
const spisok = document.querySelector('.spisok')

button.addEventListener('click', function(aboba) {
    if (inputLag.value.length != 0) {
    let lishka = document.createElement('li')
    lishka.textContent = inputLag.value
    spisok.insertAdjacentElement('beforeend',lishka)
    inputLag.value = ''
} else if (inputLag.value.length === 0){
    inputLag.style.backgroundColor = 'red'
}
})

inputLag.addEventListener('focus', function() {
    inputLag.style.backgroundColor = 'white'
})
