const mesyachniiDohod = document.querySelector(".salary-amount");
const dopDohodSum = document.querySelector(".income-amount");
const dopDohodName = document.querySelector("#incom-titl");
const vozmozhniDohodi = document.querySelectorAll(".additional_income-item");

const obyazRashodiName = document.querySelector(".expenses-title");
const obyazRashodiSum = document.querySelector(".expenses-amount");
const vozmozhniRashodi = document.querySelector(".additional_expenses-item");

const flazhok = document.querySelector("#deposit-check");
const celFlazhok = document.querySelector(".target-amount");

const periodRascheta = document.querySelector(".period-select");
const periodRaschetaSum = document.querySelector(".period-amount");

const budgetMonthValue = document.querySelector(".budget_month-value");
const budgetDayValue = document.querySelector(".budget_day-value");
const expensesMonthValue = document.querySelector(".expenses_month-value");
const additionalIncomeValue = document.querySelector(".additional_income-value");
const additionalExpensesValue = document.querySelector(".additional_expenses-value");
const incomePeriodValue = document.querySelector(".income_period-value");
const targetMonthValue = document.querySelector(".target_month-value");

periodRascheta.addEventListener("mousemove", function () {
    periodRaschetaSum.innerHTML = periodRascheta.value;
    incomePeriodValue.value = (+budgetMonthValue.value - +expensesMonthValue.value) * periodRascheta.value;
});

mesyachniiDohod.addEventListener("change", slozhenieDohoda);
dopDohodSum.addEventListener("change", slozhenieDohoda);
function slozhenieDohoda() {
    budgetMonthValue.value = +mesyachniiDohod.value + +dopDohodSum.value;
    budgetDayValue.value = +budgetMonthValue.value / 30;
}

obyazRashodiSum.addEventListener("change", function () {
    expensesMonthValue.value = obyazRashodiSum.value;
});

vozmozhniDohodi[0].addEventListener("change", function () {
    additionalIncomeValue.value = vozmozhniDohodi[0].value + " " + vozmozhniDohodi[1].value + " " + dopDohodName.value;
});
vozmozhniDohodi[1].addEventListener("change", function () {
    additionalIncomeValue.value = vozmozhniDohodi[0].value + " " + vozmozhniDohodi[1].value + " " + dopDohodName.value;
});
dopDohodName.addEventListener("change", function () {
    additionalIncomeValue.value = vozmozhniDohodi[0].value + " " + vozmozhniDohodi[1].value + " " + dopDohodName.value;
});

vozmozhniRashodi.addEventListener("change", function () {
    additionalExpensesValue.value = vozmozhniRashodi.value.replaceAll(",", " ");
});

celFlazhok.addEventListener("change", function () {
    targetMonthValue.value = +celFlazhok.value / (+budgetMonthValue.value - +expensesMonthValue.value);
});
