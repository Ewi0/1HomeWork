let money = prompt("Сколько зарабатываете", "0");
let time = prompt("Дата, образец dd-mm-yyyy"); // не используеться при учёте данных

let appData = {
    budget: money,
    timeData: time, // не используеться при учёте данных
    expenses: {}
};
////////////////
let question1 = prompt("Потребность в деньгах на месяц", '0'); // не используеться при учёте данных
let question2 = prompt("Во сколько обойдется квартира?", '0'); // не используеться при учёте данных
////////////////
appData.expenses = question1 + " " + question2; // не используеться при учёте данных

console.log("More Expenses " + appData.expenses);

alert(appData.budget / 30);
