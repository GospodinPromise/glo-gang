const money = 1000;
const income = 'фриланс';
const addExpenses = '100,200,300';
const deposit =  true;
const mission = 10000;
const period = 5;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен', period, 'месяцев.', 'Цель заработать', mission, 'рублей');
console.log(addExpenses.toLowerCase().split(','));

const budgetDay = money / 30;
console.log(budgetDay);
