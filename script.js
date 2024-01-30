const MonthNameEl = document.getElementById('month-name')
const DayNameEl = document.getElementById('day-name')
const DayNumEl = document.getElementById('day-number')
const YearEl = document.getElementById('Year')

const date = new Date();
const month = date.getMonth();
MonthNameEl.innerText = date.toLocaleDateString('en', {
    month: "long",
})

DayNameEl.innerText = date.toLocaleDateString('en', {
    weekday: "long",
})

DayNumEl.innerText = date.getDate();

YearEl.innerText = date.getFullYear();