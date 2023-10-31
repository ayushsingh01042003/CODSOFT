let currentInput = "";
let currentResult = "0";

function appendInput(value) {
    currentInput += value;
    document.getElementById("output").textContent = currentInput;
}

function clearScreen() {
    currentInput = "";
    currentResult = "0";
    document.getElementById("output").textContent = currentResult;
}

function calculate() {
    try {
        currentResult = eval(currentInput).toString();
        document.getElementById("output").textContent = currentResult;
    } catch (error) {
        currentResult = "Error";
        document.getElementById("output").textContent = currentResult;
    }
}
