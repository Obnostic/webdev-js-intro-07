"use strict";

const submissionBtn = document.getElementById("submission-btn");
/* const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");         UNUSED */


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
    document.getElementById("remainder").innerHTML = returnTheRemainder(5, 4);  
    document.getElementById("check-if-even").innerHTML = checkIfEven(47); 
    document.getElementById("lost-numbers").innerHTML = getTheFourthElement(3);
});



