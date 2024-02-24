let userScore=0;
let compScore=0;
let msg=document.querySelector("#message")
let msgContainer= document.querySelector(".msg-container");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");

const genCompChoice= ()=>{
    const options= ["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const playgame=(userchoice)=>{
console.log("user choice= ",userchoice);
//generate computer choice
const CompChoice=genCompChoice();
console.log("computer choice = ",CompChoice);
if(userchoice===CompChoice){
    drawgame();
}
else{
    let userwin= true;
    if(userchoice==="rock"){
        //scissors,paper
        userwin=CompChoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        userwin= CompChoice==="scissors" ? false:true;
    }
    else{
        userwin=CompChoice==="rock" ? false:true;

    }
    showWinner(userwin,userchoice,CompChoice);
}
};
const drawgame=()=>{
    msg.innerText="game was draw! play again."  ;
    msgContainer.style.backgroundColor="rgb(230, 85, 210)";
    
}
const showWinner=(userwin,userchoice,CompChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! your ${userchoice} beats ${CompChoice}`;
        msgContainer.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost! ${CompChoice} beats your ${userchoice}`;
        msgContainer.style.backgroundColor="red";
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    });
});