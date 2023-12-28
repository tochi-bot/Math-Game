/* Ensure that the game is executed only after the DOM has completely finished loading.*/
/*Retrieve the button elements and attach event listeners to each of them.;*/
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            }
            else {
                let gameType = this.getAttribute("data-type");
                runningGame(gameType);
            }
        });
    }
});
/**The container game 'loop' and called when script is loaded first and 
 * after the user's answer has be loaded
 */
function runningGame(gameType) {
    //creates two randon numbers between 1 and 50
    let numA = Math.floor(Math.random() * 50) + 1;
    let numB = Math.floor(Math.random() * 50) + 1;
}
if (gameType === "addition") {
    dispayAdditionQuestion(numA, numB);
}
else {
    alert('Unrecognized game type: ${gameType}');
    throw "Unrecognized game type: ${gameType}. End!";
}

function checkingAnswer() {

}
function calculatingCorrectAnwer() {

}
function incrementingScore() {

}
function incrementIncorrectAnswer() {

}
function dispayingAdditionQuestion(operant1, operant2) {
    document.getElementById(operant1).textContent = operant1;
    document.getElementById(operant2).textContent = operant2;
    document.getElementById(operantor).textContent = "+";

}
function dispayingSubtractQuestion() {

}
function dispayingMultiplyQuestion() {

}
function displayingDivideQuestion() {

}