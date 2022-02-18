//5 global variables needed
let num1;
let num2;
let operator;
let calcScreen = document.querySelector('.calc');
let valueScreen = document.querySelector('.value');

calcScreen.textContent = ''
valueScreen.textContent = '0';

const add = function(num1,num2) {
    return num1 + num2;
};

const subtract = function(num1,num2) {
    return num1 - num2;
};

const multiply = function(num1,num2) {
    return num1 * num2;
};

const divide = function(num1,num2) {
    if(num1/num2 === Infinity) return "Don't break the universe. Division by 0!";
    return num1/num2;
};

const operate = function(num1,num2,operator) {
    let sum = 0;
    if(operator === '+') sum = add(num1,num2);
    if(operator === '-') sum = subtract(num1,num2);
    if(operator === '\\') sum = divide(num1,num2);
    if(operator === '*') sum = multiply(num1,num2);
    displayValue(sum);
};

const displayValue = function(value) {
    if(valueScreen.textContent === '0') valueScreen.textContent = '';
    valueScreen.textContent += value;
};

const btnEffect = function(event) {
    if(event.target.dataset.key) {
        event.target.classList.add('key-press');
    }
};

const removeBtnEffect = function(event) {
    event.target.classList.remove('key-press');
};

//store numbers and operator values
const storeNumber = function(event) {
    if(event.target.dataset.key === '+' || event.target.dataset.key === '-' || event.target.dataset.key === '/' || event.target.dataset.key === '*') {
        num1 = +valueScreen.textContent;
        operator = event.target.dataset.key;
        valueScreen.textContent = '';
    }
}

const handleOperatorClick = function(event) {
    if(operator) {
        num2 = +valueScreen.textContent;
        operate(num1,num2,operator);
        return;
    }
    operator = event.target.dataset.key;
    num1 = +valueScreen.textContent;
    valueScreen.textContent = '';
}

const handleNumberClick = function(event) {
    const keyValue = event.target.dataset.key;
    displayValue(keyValue);    
}

//declare DOM keys
const keyPlus = document.querySelector('.key[data-key="+"]');
const keyMinus = document.querySelector('.key[data-key="-"]');
const keyMultiply = document.querySelector('.key[data-key="*"]');
const keyDivide = document.querySelector('.key[data-key="/"]');
const keyEqual = document.querySelector('.key[data-key="="]');
const keyDecimal = document.querySelector('.key[data-key="."]');
const keyClear = document.querySelector('.key[data-key="Delete"]');
const keyDelete = document.querySelector('.key[data-key="Backspace"]');

const key0 = document.querySelector('.key[data-key="0"]');
const key1 = document.querySelector('.key[data-key="1"]');
const key2 = document.querySelector('.key[data-key="2"]');
const key3 = document.querySelector('.key[data-key="3"]');
const key4 = document.querySelector('.key[data-key="4"]');
const key5 = document.querySelector('.key[data-key="5"]');
const key6 = document.querySelector('.key[data-key="6"]');
const key7 = document.querySelector('.key[data-key="7"]');
const key8 = document.querySelector('.key[data-key="8"]');
const key9 = document.querySelector('.key[data-key="9"]');

keyPlus.addEventListener('click',handleOperatorClick);
keyMinus.addEventListener('click',handleOperatorClick);
keyDivide.addEventListener('click',handleOperatorClick);
keyMultiply.addEventListener('click',handleOperatorClick);

key0.addEventListener('click', handleNumberClick);
key1.addEventListener('click', handleNumberClick);
key2.addEventListener('click', handleNumberClick);
key3.addEventListener('click', handleNumberClick);
key4.addEventListener('click', handleNumberClick);
key5.addEventListener('click', handleNumberClick);
key6.addEventListener('click', handleNumberClick);
key7.addEventListener('click', handleNumberClick);
key8.addEventListener('click', handleNumberClick);
key9.addEventListener('click', handleNumberClick);
keyDecimal.addEventListener('click', handleNumberClick);

keyEqual.addEventListener('click', operate);

//button side affect for any button click
document.addEventListener('click', btnEffect);
document.addEventListener('transitionend', removeBtnEffect);

//events
//document.addEventListener('click', operate);


//document.addEventListener('click', keyPress);
//document.addEventListener('click', storeNumber);
//document.addEventListener('click', displayValue);
//document.addEventListener('keydown', keyPress);

//document.addEventListener('transitionend', removeKeyPress);

