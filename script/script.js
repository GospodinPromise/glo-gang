'use strict'
const arr = [12,54,65,25,47,99,65];
function evaZebra () {
    for(let i=arr.length; i>0; i--){

        let abobys = arr[i-1];
        abobys = String(abobys);

        if(abobys[0] === '4' || abobys[0] === '2') {               
            console.log(abobys);
    } 
}}
evaZebra();


function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true
    }

    function printPrimes(max) {
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) console.log(i,'Делители этого числа:',1,'и',i);
    }     
}

printPrimes(100);
