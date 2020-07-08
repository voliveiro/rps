function playGame(){
    actions=['Rock', 'Paper', 'Scissors']
    computerInput=actions[Math.floor(Math.random()* actions.length)]

    let userInput = document.getElementById("player-options").value;

    //userInput=userInput.toString().toLowerCase(); -- Unnecessary

    document.getElementById("computer-action").innerHTML = computerInput
    document.getElementById("human-action").innerHTML = userInput

    let computerWins = (userInput === 'Rock' && computerInput==='Paper') || (userInput === 'Scissors' && computerInput==='Rock') || (userInput === 'Paper' && computerInput==='Scissors')  

    let userWins = (computerInput === 'Rock' && userInput==='Paper') || (computerInput === 'Scissors' && userInput==='Rock') || (computerInput === 'Paper' && userInput==='Scissors')  

    let Draw = (userInput === computerInput)

    console.log(`User throws ${userInput}`)
    console.log(`Computer throws ${computerInput}`)

    if (computerWins){
        //console.log("Computer wins");
        document.getElementById("outcome").innerHTML = "Computer Wins!!!";
    } else if (userWins) {
        //console.log ("User Wins");
        document.getElementById("outcome").innerHTML = "Player Wins!!!";
    } else {
        //console.log ("Draw")
        document.getElementById("outcome").innerHTML = "Draw!";
    }
}