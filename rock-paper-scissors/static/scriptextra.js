var results1, results2, results3;
var playerChoice;
var botChoice; 
var botNumber = Math.floor(Math.random() * 7);
//console.log(botNumber)

function rpsGame() {
    if (botNumber === 1) {
        botChoice = 'ROCK'
        document.getElementById("rock").style.borderColor="#FF0000"      
    } else if (botNumber === 2) {
        botChoice = 'PAPER'
        document.getElementById("paper").style.borderColor="#FF0000"  
    } else if (botNumber === 0) {
        botChoice = 'SCISSORS'
        document.getElementById("scissor").style.borderColor="#FF0000"  
    } else if (botNumber === 3) {
        botChoice = 'ROCK'
        document.getElementById("rock").style.borderColor="#FF0000"  
    } else if (botNumber === 4) {
        botChoice = 'SCISSORS'
        document.getElementById("scissor").style.borderColor="#FF0000"  
    } else if (botNumber === 5) {
        botChoice = 'PAPER'
        document.getElementById("paper").style.borderColor="#FF0000"  
    } else if (botNumber === 6) {
        botChoice = 'ROCK'
        document.getElementById("rock").style.borderColor="#FF0000"  
    }
    //console.log(botChoice)
}

function rock() {
    if(botChoice === 'ROCK') {
        results1 = ('Tie!')
        document.getElementById("scissor").remove()
        document.getElementById("paper").remove()
    } else if (botChoice === 'PAPER') {
        results1 = ('You lose, the bot chose ' + botChoice)
        document.getElementById("scissor").remove()
    } else if (botChoice === 'SCISSORS') {
        results1 = ('You win! The bot chose ' + botChoice)
        document.getElementById("paper").remove()
    }
    //console.log(results1)
    document.getElementById('text').innerHTML = results1; 
}

function paper() {
    if(botChoice === 'ROCK') {
        results2 = ('You win! The bot chose ' + botChoice)
        document.getElementById("scissor").remove()
    } else if (botChoice === 'PAPER') {
        results2 = ('Tie')
        document.getElementById("scissor").remove()
        document.getElementById("rock").remove()
    } else if (botChoice === 'SCISSORS') {
        results2 = ('You lose, The bot chose ' + botChoice)
        document.getElementById("rock").remove()
    }
    //console.log(results2)
    document.getElementById('text').innerHTML = results2; 
}

function scissors() {
    if(botChoice === 'ROCK') {
        results3 = ('You lose, The bot chose ' + botChoice)
        document.getElementById("paper").remove()
    } else if (botChoice === 'PAPER') {
        results3 = ('You win! The bot chose ' + botChoice)
        document.getElementById("rock").remove()
    } else if (botChoice === 'SCISSORS') {
        results3 = ('Tie')
        document.getElementById("paper").remove()
        document.getElementById("rock").remove()
    }
    //console.log(results3)
    document.getElementById('text').innerHTML = results3; 
}

function fnChangeBorderRock(){
    document.getElementById("rock").style.borderColor="#0000FF"
 }

 function fnChangeBorderPaper(){
    document.getElementById("paper").style.borderColor="#0000FF"
 }

 function fnChangeBorderScissors(){
    document.getElementById("scissor").style.borderColor="#0000FF"
 }





