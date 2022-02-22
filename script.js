//5 global variables needed
let num1 = '';
let num2 = '';
let operator;
let result;
const calcScreen = document.querySelector('.calc');
const valueScreen = document.querySelector('.value');

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

const operate = function() {
    if(operator === '+') result = add(+num1,+num2);
    if(operator === '-') result = subtract(+num1,+num2);
    if(operator === '/') result = divide(+num1,+num2);
    if(operator === '*') result = multiply(+num1,+num2);
    valueScreen.textContent = result;
    num1 = String(result);
    num2 = '';
    result = 0;
};

const displayValue = function() {
    if(valueScreen.textContent === '0') valueScreen.textContent = '';

    if(!operator) valueScreen.textContent = num1;
    else valueScreen.textContent = num2;

    //condition if "Clear" is used
    if(!num1 && !num2) {
        valueScreen.textContent = '0';
        }
};

const btnEffect = function(event) {
    if(event.target.dataset.key) {
        event.target.classList.add('key-press');
    }
};

const removeBtnEffect = function(event) {
    event.target.classList.remove('key-press');
};

const storeOperator = function(opr) {
    if(!operator) operator = opr.target.dataset.key;
    if(operator && result === 0) operator = opr.target.dataset.key;
    if(num1 && num2 && operator) operate();
};

const storeNumbers = function(event) {
    if(!operator) num1 += event.target.dataset.key;

    if(operator) num2 += event.target.dataset.key;
};

const clearAll = function() {
    num1 = '';
    num2 = '';
    operator = '';
    result = 0;
};

const deletePrevious = function() {
    if(!operator) num1 = num1.slice(0,-1);
    if(operator) num2 = num2.slice(0,-1);
}

//declare DOM keys
const keyPlus = document.querySelector('.key[data-key="+"]');
const keyMinus = document.querySelector('.key[data-key="-"]');
const keyMultiply = document.querySelector('.key[data-key="*"]');
const keyDivide = document.querySelector('.key[data-key="/"]');
const keyEqual = document.querySelector('.key[data-key="="]');
const keyDecimal = document.querySelector('.key[data-key="."]');
const keyClear = document.querySelector('.clear');
const keyDelete = document.querySelector('.delete');

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

key0.addEventListener('click', storeNumbers);
key1.addEventListener('click', storeNumbers);
key2.addEventListener('click', storeNumbers);
key3.addEventListener('click', storeNumbers);
key4.addEventListener('click', storeNumbers);
key5.addEventListener('click', storeNumbers);
key6.addEventListener('click', storeNumbers);
key7.addEventListener('click', storeNumbers);
key8.addEventListener('click', storeNumbers);
key9.addEventListener('click', storeNumbers);
keyDecimal.addEventListener('click', storeNumbers);

keyPlus.addEventListener('click',storeOperator);
keyMinus.addEventListener('click',storeOperator);
keyDivide.addEventListener('click',storeOperator);
keyMultiply.addEventListener('click',storeOperator);

key0.addEventListener('click', displayValue);
key1.addEventListener('click', displayValue);
key2.addEventListener('click', displayValue);
key3.addEventListener('click', displayValue);
key4.addEventListener('click', displayValue);
key5.addEventListener('click', displayValue);
key6.addEventListener('click', displayValue);
key7.addEventListener('click', displayValue);
key8.addEventListener('click', displayValue);
key9.addEventListener('click', displayValue);
keyDecimal.addEventListener('click', displayValue);

keyEqual.addEventListener('click', operate);

keyClear.addEventListener('click', clearAll);
keyClear.addEventListener('click', displayValue);
keyDelete.addEventListener('click', deletePrevious);
keyDelete.addEventListener('click', displayValue);

//button side affect for any button click
document.addEventListener('click', btnEffect);
document.addEventListener('transitionend', removeBtnEffect);


