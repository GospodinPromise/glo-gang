const knopka = document.querySelector('#change')
const text = document.querySelector('#color')
const massiv = []
const bodyz = document.querySelector('.body')

knopka.addEventListener('click', function(randomDecimal){
    massiv.push('#')
    for(i= 0 ; i<6 ; i++){
        randomDecimal = Math.floor(Math.random() * 16).toString(16)
        massiv.push(randomDecimal)
    }
    text.textContent = massiv.join('')
    bodyz.style.backgroundColor = massiv.join('')
    massiv.length = 0
})


