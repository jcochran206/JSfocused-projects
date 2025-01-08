document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    const amountInput = document.getElementById('amount');
    const expenseChart = document.getElementById('expense-chart');

    let selectedMonth;
    let selectedYear;
    let myChart;
    
    //generate year options dynamically
    for(let year = 2024; year <= 2040; year++){
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    //initialize expenses object with new categories 
        const expenses = {
        January: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        February: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        March: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        April: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        May: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        June: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        July: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        August: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        September: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        October: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        November: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 },
        December: { Housing: 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 }
    };
    //load expenses
    function getExpensesFromLocalStorage(month,year){
        const key = `${month}-${year}`;
        return JSON.parse(localStorage.getItem(key)) || {};
    }
    //save expenses 
    function saveExpensesToLocalStorage(month,year){
        const key = `${month}-${year}`;
        localStorage.setItem(key, JSON.stringify(expenses[month]));
    }
    //get selected month and year
    function getSelectMonthYear(){
        selectedMonth = monthSelect.value;
        selectedYear = yearSelect.value;

        if(!selectedMonth || !selectedYear){
            alert('Month or year not selected');
            return;
        }

        if(!expenses[selectedMonth]){
            expenses[selectedMonth] = {Housing : 0, Food: 0, Transportation: 0, Bills: 0, Miscellaneous: 0 }
        }
    }

    //visualize data

    //add new data

    //Events Listeners

    //default

    //initialize
})