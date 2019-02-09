let num = Math.floor((Math.random() * 100) + 1)

let display = document.getElementById('result');

function checkResult() {
    let guess = parseInt(document.getElementById('number').value);
    console.log(guess);
    if (guess == null){
        return;
    }
    else if (guess == num){
        display.style.color = "#4BB543";
        display.innerHTML = "You are a generous person!";
    }
    else if (guess > num) {
        display.style.color = "#d9534f";
        display.innerHTML = "Relax! You are too kind";
    }
    else {
        display.style.color = "#d9543f";
        display.innerHTML = "Common dont be cheap!";
    }
}

let amount = 


function billAmount() {
    let bill = parseInt(document.getElementById('bill').value)
    if (bill == null){
        return
    }
    else if (bill == num){
        display.style.color = "#4BB543";
        display.innerHTML = "You got it!";
    }
    else if (bill > num) {
        display.style.color = "#d9534f";
        display.innerHTML = "WAAAAAY TOOO HIGH, MY BOSS IS WATCHIN'!";
    }
    else {
        display.style.color = "#d9543f";
        display.innerHTML = "You're cheap, Bro!!!";
    }
}