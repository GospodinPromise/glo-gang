const num = 5551;
const numberArray = Array.from(String(num),Number);
const size = numberArray.length;

const resultX3 = numberArray.reduce((partialSum,currentvalue) => partialSum * currentvalue);
console.log(resultX3);

const resultString = Array.from(String(resultX3**3),Number).splice(0,2);
console.log(resultString);



