const num = 5;
const numberArray = Array.from(String(num),Number);
const size = numberArray.length;
let result = 0;
let resultOfResult = 0;

function aboba(){
    for(i=size-1; i>=0; i--) {
        if(i===size-1){
            result = numberArray[i] * 1 ;
        } else {
            resultOfResult = result * numberArray[i];
            result = resultOfResult;
        } 
    }
}
aboba();

const resultX3 = result**3;
const resultString = Array.from(String(resultX3),Number);
console.log(String(resultString[0])+String(resultString[1]));





