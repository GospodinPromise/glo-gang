const num = 5551;
const numberArray = Array.from(String(num),Number);

const resultX3 = numberArray.reduce((partialSum,currentvalue) => partialSum * currentvalue);
console.log(resultX3);

const resultString = String(Number(resultX3**3)).slice(0,2);
console.log(resultString);


