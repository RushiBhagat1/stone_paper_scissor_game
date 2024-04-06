let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choise");
const msg = document.querySelectorAll("#msg");


const genCompChoise = () =>{
const options=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random() * 3);
return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText="game was draw.play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoise, compChoise) => {
    if(userWin){
        console.log("you win!");
        msg.innerText=`you win! your ${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor ="green";
    }else{
        console.log("you lose");
        msg.innerText=`you lose. ${compChoise} beats ${userChoise}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoise) => {
    console.log("user choise =", userChoise);
    //Generate computer choise.
    const compChoise = genCompChoise();
    console.log("comp choise =", compChoise);

    if(userChoise === compChoise){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoise === "rock"){
            //scissor,paper
            userWin = compChoise === "paper" ? false : true;
        }else if(userChoise === "paper"){
            //rock,scissor.
            userWin = compChoise === "scisssor" ? false : true;
        }else{
            //rock,paper
            userWin = compChoise === "rock" ? false : true;
        }

        showWinner(userWin);

    }
};

choices.forEach((choise) => {

 choise.addEventListener("click",() =>{
    const userChoise = choise.getAttribute("id")
    console.log("choise was clicked", userChoise);
 });
});