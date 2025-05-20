let hands = ["rock", "paper", "scissors"];
let result=document.getElementById("result");
let botSelection=document.getElementById("bot-selection");
let message="";

function getHand(choices){
    let index = Math.floor(Math.random()*choices.length);
    return choices[index];
}


function rock(){
    let choice=getHand(hands);
    if(choice==="rock"){
        message="It's a draw!";
    }
    else if(choice==="paper")
        message="You lose!";

    else
        message="You win!";

    botSelection.textContent=choice;
    result.textContent=message;
}

function paper(){
    let choice=getHand(hands);
    if(choice==="rock"){
        message="You win!";
    }
    else if(choice==="paper")
        message="It's a draw!";

    else 
        message="You lose!";

    botSelection.textContent=choice;
    result.textContent=message;
}

function scissors(){
    let choice=getHand(hands);
    if(choice==="rock"){
        message="You lose!";
    }
    else if(choice==="paper")
        message="You win!";

    else
        message="It's a draw!";

    botSelection.textContent=choice;
    result.textContent=message;
}



