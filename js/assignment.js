"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");


function returnTheRemainder(num1, num2) {
    return(num1 % num2);
}


function checkIfEven(num3) {    
    return (num3 % 2 === 0);
}


function getTheFourthElement(num4) {
    const lostNumbers = [4, 8, 15, 16, 23, 42];
    return(lostNumbers[num4]);
}


submissionBtn.addEventListener("click", function () {
    remainderElement.innerText = returnTheRemainder(5, 4);
    checkIfEvenElement.innerText = checkIfEven(47);
    lostNumbersElement.innerText = getTheFourthElement(3)
});



