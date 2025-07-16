const numOne = document.getElementById('btnOne');
const numTwo = document.getElementById('btnTwo');
const numThree = document.getElementById('btnThree');
const numFour = document.getElementById('btnFour');
const numFive = document.getElementById('btnFive');
const numSix = document.getElementById('btnSix');
const numSeven = document.getElementById('btnSeven');
const numEight = document.getElementById('btnEight');
const numNine = document.getElementById('btnNine');
const numZero = document.getElementById('btnZero');

const btnClear = document.getElementById('btnClear');
const btnPorcentage = document.getElementById('btnPorcentage');
const btnRadic = document.getElementById('btnRadic');
const btnPotence = document.getElementById('btnPotence');
const btnDivide = document.getElementById('btnDivide');
const btnSubtract = document.getElementById('btnSubtract');
const btnSum = document.getElementById('btnSum');
const btnMultiply = document.getElementById('btnMultiply');
const btnEqual = document.getElementById('btnEqual');
const btnFloat = document.getElementById('btnFloat');

const display = document.getElementById('display');

let disp = [1,2,3,4,5];

numOne.addEventListener('click', () => display.textContent += '1' && disp.push(1));
numTwo.addEventListener('click', () => display.textContent += '2');
numThree.addEventListener('click', () => display.textContent += '3');
numFour.addEventListener('click', () => display.textContent += '4');
numFive.addEventListener('click', () => display.textContent += '5');
numSix.addEventListener('click', () => display.textContent += '6');
numSeven.addEventListener('click', () => display.textContent += '7');
numEight.addEventListener('click', () => display.textContent += '8');
numNine.addEventListener('click', () => display.textContent += '9');
numZero.addEventListener('click', () => display.textContent += '0');

btnSum.addEventListener('click', () => display.textContent += '+');
btnSubtract.addEventListener('click', () => display.textContent += '-');
btnMultiply.addEventListener('click', () => display.textContent += '*');
btnDivide.addEventListener('click', () => display.textContent += '/');
btnPotence.addEventListener('click', () => display.textContent += '^');
btnRadic.addEventListener('click', () => display.textContent += '√');
btnPorcentage.addEventListener('click', () => display.textContent += '%');
btnClear.addEventListener('click', () => display.textContent = '');
btnFloat.addEventListener('click', () => display.textContent += '.');
btnEqual.addEventListener('click', () => display.textContent = eval(display.textContent));

function somarNumeros(a){
    let soma = 0;
    for (let i = 0; i < a.length; i++) {
        soma += a[i];
    }
    return soma;
}
