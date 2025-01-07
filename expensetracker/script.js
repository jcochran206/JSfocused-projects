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

    //load expenses

    //save expenses 

    //get selected month and year

    //visualize data

    //add new data

    //Events Listeners

    //default

    //initialize
})