//NAVIGATION (TABS)

function switchTab(tabName) {
    // get elements
    const splitView = document.getElementById('splitter-view');
    const budgetView = document.getElementById('tracker-view');
    const btnSplit = document.getElementById('btn-split');
    const btnBudget = document.getElementById('btn-budget');

    // hide/show, if "split" is selected, show split view and hide budget view
    // if "budget" is selected, show budget view and hide split view
    if(tabName === 'split') {
        splitView.classList.remove('hidden');
        budgetView.classList.add('hidden');
        btnSplit.classList.add('active');
        btnBudget.classList.remove('active');
    } else {
        splitView.classList.add('hidden');
        budgetView.classList.remove('hidden');
        btnSplit.classList.remove('active');
        btnBudget.classList.add('active');
    }
}


// BILL SPLITTER


let tipPercent = 0.15; // default tip
let people = 2; // default people

// calculate Split. Get value from input box and convert to float.
// parsefloat to handle decimal values
function calculateSplit() {
    const billInput = document.getElementById('billTotal').value;
    let billAmount = parseFloat(billInput);

    // if box is empty, treat as 0
    if (isNaN(billAmount)) {
        billAmount = 0;
    }

    // math
    const totalTip = billAmount * tipPercent;
    const totalBill = billAmount + totalTip;
    const perPerson = totalBill / people;

    // update the text on screen, make it look like money
    document.getElementById('splitResult').innerText = "$" + perPerson.toFixed(2);
}

// update the text on screen when people changes
// change is +1 or -1
// minimum of 1 person
function updatePeople(change) {
    people += change;
    if (people < 1) people = 1;
    
    
    document.getElementById('peopleCount').innerText = people;
    
    // re-calculate when people changes
    calculateSplit();
}

// element = button clicked. then set tip percentage
// clear custom tip input
// remove selected class from all buttons
// used forEach to loop through all buttons
function setTip(percent, element) {
    tipPercent = percent;

    document.getElementById('customTip').value = ''; 
    
document.querySelectorAll('.tip-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // add selected class to the clicked button so it highlights orange
    if (element) {
        element.classList.add('selected');
    }
    calculateSplit();
}

function setCustomTip() {
    const val = document.getElementById('customTip').value;
    
    // if typing in custom box, remove selected class from all buttons
    // by searching for all tip buttons
    document.querySelectorAll('.tip-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // convert to decimal
    if(val >= 0) {
        tipPercent = val / 100;
        calculateSplit();
    }
}

// event listener to auto-calculate when there's input. no need to have a"calculate" button
document.getElementById('billTotal').addEventListener('input', calculateSplit);


//BUDGET TRACKER (/w LocalStorage)


// hold list of objects
let expenses = [];

// load data when page opens
// check if the browser has saved data
// JSON.parse converts the saved "Text String" back into JavaScript
// then render the list
window.onload = function() {
    const storedExpenses = localStorage.getItem('myExpenses');
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
        renderExpenses();
    }
}

function addExpense() {
    const nameInput = document.getElementById('expenseName');
    const amountInput = document.getElementById('expenseAmount');

    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);

    // name entry validation, notify if empty
    if (name === '' || isNaN(amount)) {
        alert("Please enter a name and a cost.");
        return;
    }

    // create expense object
    const newExpense = {
        id: Date.now(), // unique ID based on timestamp
        name: name,
        amount: amount
    };

    // add to array
    expenses.push(newExpense);

    // save and render
    saveData();
    renderExpenses();

    // clear inputs
    nameInput.value = '';
    amountInput.value = '';
}

// filter out the item to delete by keeping all items that do not match the id
function deleteExpense(id) {
    expenses = expenses.filter(item => item.id !== id);
    saveData();
    renderExpenses();
}

function renderExpenses() {
    const list = document.getElementById('expenseList');
    const totalDisplay = document.getElementById('totalSpent');
    
    list.innerHTML = ""; 
    let total = 0;

    // go through each expense, add to total, and create list item
    // add the list item to the ul
    expenses.forEach(item => {
        total += item.amount;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <div>
                <strong>$${item.amount.toFixed(2)}</strong>
                <button class="delete-btn" onclick="deleteExpense(${item.id})">X</button>
            </div>
        `;
        list.appendChild(li);
    });

    // update Total
    totalDisplay.innerText = "$" + total.toFixed(2);
}

// EXTRA CREDIT: Save to LocalStorage
// Convert the expenses into a text string using JSON.stringify
// localStorage only stores text
function saveData() {
    localStorage.setItem('myExpenses', JSON.stringify(expenses));
}

function clearData() {
    if(confirm("Are you sure you want to delete all history?")) {
        expenses = [];
        saveData();
        renderExpenses();
    }
}