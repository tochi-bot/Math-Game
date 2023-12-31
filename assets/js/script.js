/* Ensure that the game is executed only after the DOM has completely finished loading.*/
/*Retrieve the button elements and attach event listeners to each of them.;*/
// Declare gameType outside the function

let gameType; // Declare gameType outside the function

document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to handle button clicks
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            // Check if the button is a submit button
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            } else {
                // Assign the value to gameType and call the runningGame function
                gameType = this.getAttribute("data-type");
                runningGame(gameType);
            }
        });
    }
});

function runningGame(gameType) {
    // Generate two random numbers between 1 and 50
    let numA = Math.floor(Math.random() * 50) + 1;
    let numB = Math.floor(Math.random() * 50) + 1;

    if (gameType === "addition") {
        // Call the displayAdditionQuestion function for addition game type
        displayAdditionQuestion(numA, numB);
    } else {
        // Display an alert for unrecognized game types and throw an error
        alert(`Unrecognized game type: ${gameType}`);
        throw `Unrecognized game type: ${gameType}. End!`;
    }
}

function checkingAnswer() {
    // Implement your checking answer logic here
}

function calculatingCorrectAnswer() {
    // Implement your correct answer calculation logic here
}

function incrementingScore() {
    // Implement your score incrementing logic here
}

function incrementIncorrectAnswer() {
    // Implement your incorrect answer incrementing logic here
}

function displayAdditionQuestion(operand1, operand2) {
    // Display the operands and operator for the addition question
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function dispayingSubtractQuestion() {

}
function dispayingMultiplyQuestion() {

}
function displayingDivideQuestion() {

}