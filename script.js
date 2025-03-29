let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value !== "") {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        let expression = display.value.replace("×", "*").replace("÷", "/");
        display.value = eval(expression);
    } catch (e) {
        display.value = "Error";
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function applyFunction(operation) {
    let display = document.getElementById("display");
    let value = parseFloat(display.value);

    if (isNaN(value) && operation !== "parens") return; // Jika input bukan angka, keluar dari fungsi

    switch (operation) {
        case 'sin':
            display.value = Math.sin(value * Math.PI / 180); // Konversi ke derajat
            break;
        case 'cos':
            display.value = Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            display.value = Math.tan(value * Math.PI / 180);
            break;
        case 'sqrt':
            display.value = Math.sqrt(value);
            break;
        case 'ln':
            display.value = Math.log(value);
            break;
        case 'log':
            display.value = Math.log10(value);
            break;
        case 'inv':
            display.value = 1 / value;
            break;
        case 'exp':
            display.value = Math.exp(value);
            break;
        case 'square':
            display.value = Math.pow(value, 2);
            break;
        case 'power':
            display.value += "^"; // Menambahkan tanda eksponen untuk diinput manual
            break;
        case 'percent':
            display.value = value / 100;
            break;
        case 'parens':
            // Menambahkan tanda kurung ke dalam input
            if (!display.value.includes("(")) {
                display.value += "(";
            } else {
                display.value += ")";
            }
            break;
    }
}

let history = [];

function calculateResult() {
    let display = document.getElementById("display");
    let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    try {
        let result = eval(expression);
        history.unshift(`${display.value} = ${result}`); // Simpan ke history
        if (history.length > 5) history.pop(); // Batasi history max 5 item
        updateHistory();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function updateHistory() {
    let historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function toggleHistory() {
    let historyContainer = document.getElementById("history-container");
    historyContainer.style.display = historyContainer.style.display === "block" ? "none" : "block";
}

