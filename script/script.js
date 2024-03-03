const money = 1000;
const income = 'фриланс';
let addExpenses = "100, 200, 300";
const deposit =  true;
const mission = 10000;
const period = 5;

console.log(typeof money , typeof income , typeof deposit);
console.log(addExpenses.length);
console.log('Период равен',period,'месяцев');
console.log('Цель заработать',mission,'рублей/долларов/гривен/юани');

addExpenses = addExpenses.toLowerCase ();
addExpenses = addExpenses.split(',');
console.log(addExpenses)

const budgetDay = money / 30;
console.log(budgetDay);