let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara  = document.querySelector('#user-score');
const compScorePara  = document.querySelector('#comp-score');


const genCompScore = ()=>{
    const options = ['rock','Paper','Scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    msg.innerText = `draw was game`;
    msg.style.backgroundColor = 'green';
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'Pink';
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'purple';
    }
};

const playGame =(userChoice)=>{
//  generate comp choice
const compChoice = genCompScore();


if (userChoice === compChoice){
    drawGame();

}

else{
    let userWin = true;
    if(userChoice === 'rock'){
        userWin = compChoice === 'Paper'?false : true;
    }

    else if (userChoice === 'Paper'){
        userWin = compChoice === 'Scissors'? false : true;
    }

    else {
        userWin = compChoice === 'rock' ?false :true;
    }
    showWinner(userWin,userChoice,compChoice)
}
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })

})
