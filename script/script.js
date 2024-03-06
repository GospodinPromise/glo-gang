'use strict'
let money = prompt('Ваш месячный доход?',10000);
const income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const deposit =  confirm('Есть ли у вас депозит в банке?');
const mission = 100000;
const period = 5;
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = prompt('Во сколько это обойдется?',1000);
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = prompt('Во сколько это обойдется?',1000);

function getExpensesMonth (a,b) {  
    if(typeof a === 'number' && typeof b === 'number'){
    return a + b} else {
    console.log('Введите пожалуйста число в сумме обязательных расходов')
    }
}
function getAccumulatedMonth () {return +money - getExpensesMonth(+amount1,+amount2)}; 
const accumulatedMonth = getAccumulatedMonth(); 

function getTargetMonth (resultTargetMonth) {
resultTargetMonth = mission / accumulatedMonth;
if(resultTargetMonth <= 0 ){
    console.log('Цель не будет достигнута');
    return resultTargetMonth;
} else {
    console.log('Цель будет достигнута');
    return resultTargetMonth;
}
}; 

addExpenses = addExpenses.split(',');
const addExpensesSum = addExpenses.reduce((partialSum,currentValue) => +partialSum + +currentValue ,0); 

const budgetDay = Math.floor( accumulatedMonth / 30); 

function etStatusIncome () {       
if(budgetDay>1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay>= 600 && budgetDay<=1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay<600 && budgetDay>=0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}}

function showTypeOf () {
    console.log('',typeof money,'\n',typeof income,'\n',typeof addExpenses,'\n',typeof deposit,'\n',typeof mission); 
}

function start () {
    money = prompt('Ваш месячный доход?',10000);
    
    while (isNaN(parseFloat(money))){
        money= prompt('Ваш Месячный Доход?');
    }
}
start()

showTypeOf();
etStatusIncome();
console.log(accumulatedMonth);
console.log(addExpensesSum);
console.log(Math.ceil(getTargetMonth()));
console.log(budgetDay);
