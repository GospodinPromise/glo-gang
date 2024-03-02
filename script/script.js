let money = 1000;
let income = 500;
let addExpenses = "100, 200, 300";
let deposit =  true;
let mission = 10000;
let period = 5;

console.log (typeof money , typeof income , typeof deposit);
console.log (addExpenses.length);
console.log ('Период равен',period,'месяцев');
console.log ('Цель заработать',mission,'рублей/долларов/гривен/юани');

addExpenses = addExpenses.toLowerCase ();
addExpenses = addExpenses.split(',');
console.log(addExpenses)

const budgetDay = money / 30;
console.log (budgetDay);