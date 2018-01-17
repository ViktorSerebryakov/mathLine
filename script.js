'use strict';

var firstNumber = 7;
var secondNumber = 4;
var answerNumber = firstNumber + secondNumber;

var firstArg = document.querySelector('.first-arg-js');
var firstArgRight = document.querySelector('.first-arg-right-js');
var firstNumberElement = document.querySelector('.first-number-js');

var secondArg = document.querySelector('.second-arg-js');
var secondArgRight = document.querySelector('.second-arg-right-js');
var secondNumberElement = document.querySelector('.second-number-js');

var answer = document.querySelector('.answer-js');
var answerIput = document.querySelector('.answer-input-js');
var answerRightElement = document.querySelector('.answer-right-js');

var secondArrow = document.querySelector('.second-arrow-js');

function validateFirstArg(event) {
    var target = event.target;
    var value = target.value;
    if (+value !== firstNumber) {
        firstNumberElement.classList.add('yellow');
        target.classList.add('error-input');
    } else {
        firstNumberElement.classList.remove('yellow');
        target.classList.add('hidden');
        firstArgRight.classList.remove('hidden');
        secondArg.classList.remove('hidden');

        secondArg.focus();

        secondArrow.classList.remove('border-arrow-opacity');
    }
}

function validateSecondArg(event) {
    var target = event.target;
    var value = target.value;
    if (+value !== secondNumber) {
        secondNumberElement.classList.add('yellow');
        target.classList.add('error-input');
    } else {
        secondNumberElement.classList.remove('yellow');
        target.classList.add('hidden');
        secondArgRight.classList.remove('hidden');
        answer.classList.add('hidden');
        answerIput.classList.remove('hidden');
        answerIput.focus();
    }
}

function validateAnswer(event) {
    var target = event.target;
    var value = target.value;
    if (+value !== answerNumber) {
        target.classList.add('error-input');
    } else {
        target.classList.add('hidden');
        answerRightElement.classList.remove('hidden');
    }
}

firstArg.addEventListener('input', validateFirstArg);
secondArg.addEventListener('input', validateSecondArg);
answerIput.addEventListener('input', validateAnswer);