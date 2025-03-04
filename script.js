let lastOperand = 0;
let operation = null;
let result;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_num').addEventListener('click', function () {
    inputWindow.value += this.getAttribute('data-num');
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

// кнопка = 
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation){
        switch (operation){
            case '+': result = lastOperand + parseFloat(inputWindow.value);
            break;
            case '-': result = lastOperand - parseFloat(inputWindow.value);
            break;
            case '*': result = lastOperand * parseFloat(inputWindow.value);
            break;
            case '/': result = parseFloat(inputWindow.value) !== 0 ? lastOperand / parseFloat(inputWindow.value) : "Error div zero";
            break;
        }
      
})

// кнопка С очистка
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})
