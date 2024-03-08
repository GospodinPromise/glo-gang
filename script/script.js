const money = 1000;
const income = 'фриланс';
let addExpenses = '100,200,300';
const deposit =  true;
const mission = 10000;
const period = 5;

addExpenses = addExpenses.toLowerCase().split(',')
console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей.`);
console.log(addExpenses[0],addExpenses[1],addExpenses[2]);

const budgetDay = money / 30;
console.log(budgetDay);
