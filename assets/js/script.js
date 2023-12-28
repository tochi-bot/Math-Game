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
                alert('You clicked ${gameType}');
            }
        });
    }
});
function runningGame() {
    math.floor;
}

function checkingAnswer() {

}
function calculatingCorrectAnwer() {

}
function incrementingScore() {

}
function incrementIncorrectAnswer() {

}
function dispayingAdditionQuestion() {

}
function dispayingSubtractQuestion() {

}
function dispayingMultiplyQuestion() {

}
function displayingDivideQuestion() {

}