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
                checkingAnswer();
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
        throw new Error(`Unrecognized game type: ${gameType}.End!`);
    }
}
//checks answer agaist the first element in the retrived calculatedCorrectAnswer array
function checkingAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculatingCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert("weldon! You are Correct:)");
        incrementingScore();
    } else {
        alert(`Nooo... Your Answer is ${userAnswer} and the Correct Anwer was ${calculatedAnswer[0]}. Please try again.`);
        incrementIncorrectAnswer();
    }
    if (calculatedAnswer[1]) {
        runningGame(calculatedAnswer[1]);
    } else { alert("Error: Game type is undefined"); }

}
//**Gets the numbers (operands) and operator (plus. minus, multiplcation and division) directly from the dom to retrieve the correct answer*/
function calculatingCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`unrealized operator ${operator}`);
        throw new Error(`unrealized operator ${operator}.End!`);
    }

}
// Get the scores from the DOM and increament it by 1
function incrementingScore() {
    let previousScores = parseInt(document.getElementById("scores").innerText);
    document.getElementById("scores").innerText = ++previousScores;

}
// Get the incorrectScores from the DOM and increament it by 1
function incrementIncorrectAnswer() {
    // Implement incorrect answer incrementing logic here
    let previousScores = parseInt(document.getElementById("incorrectScores").innerText);
    document.getElementById("incorrectScores").innerText = ++previousScores;
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