function counttoDisplay(val) {
    document.getElementById('result').value += val;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('result').value;
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function deleteLast() {
    const currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}