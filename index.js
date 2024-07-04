// calculator logic!!

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}

function percentage() {
    result = eval(display.value);
    display.value = result / 100;
}

function changeSigns() {
    display.value = -1 * eval(display.value);
}