'use strict'
const money = prompt('Ваш месячный доход?');
const income = 'фриланс';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(',');
const deposit =  confirm('Есть ли у вас депозит в банке?');
const mission = 10000;
const period = 5;
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = prompt('Во сколько это обойдется?');
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = prompt('Во сколько это обойдется?');
console.log(addExpenses)
const addExpensesSum = addExpenses.reduce((partialSum,currentValue) => +partialSum + +currentValue ,0);
const budgetMonth = money - amount1 - amount2 - addExpensesSum; 
console.log(budgetMonth);

const missionTime = Math.ceil(mission / budgetMonth);
console.log(missionTime);

const budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay)

if(budgetDay>1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay>= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay>=0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}
