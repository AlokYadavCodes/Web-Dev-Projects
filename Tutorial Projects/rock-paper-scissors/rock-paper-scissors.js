function computerChoiceGenerater(){
    let randomNumber=Math.random()*3;
    if(randomNumber<=1){
        return (`rock`);
    }
    else if(randomNumber<=2){
        return (`paper`);
    }
    else{
        return (`scissors`);
    }
}


let score= JSON.parse(localStorage.getItem('scoreStr')) ?? {
    win:0,
    lose:0,
    tie:0,
};
scoreUpdate();

resultTextUpdate();
function resultTextUpdate(){
    if(score.win==0 && score.lose==0 && score.tie==0){
        document.querySelector('.result-text').innerText=`Let's start the game.`
    }
    else{
        document.querySelector('.result-text').innerText=`Resuming from where you left.`
    }
}

function scoreUpdate(){
    localStorage.setItem('scoreStr',JSON.stringify(score));
    document.querySelector('#win').innerText=score.win;
    document.querySelector('#lose').innerText=score.lose;
    document.querySelector('#tie').innerText=score.tie;

}

function resultGenerater(userChoice){
    let computerChoice=computerChoiceGenerater();
    let result;
    if(userChoice===computerChoice){
        result=`it's a tie`;
        score.tie++;
    }
    else if(userChoice===`rock` && computerChoice===`paper`){
        result=`computer won`;
        score.lose++;
    } 
    else if(userChoice===`rock` && computerChoice===`scissors`){
        result=`you won`;
        score.win++;
    } 
    else if(userChoice===`paper` && computerChoice===`rock`){
        result=`you won`;
        score.win++;
    } 
    else if(userChoice===`paper` && computerChoice===`scissors`){
        result=`computer won`;
        score.lose++;
    } 
    else if(userChoice===`scissors` && computerChoice===`rock`){
        result=`computer won`;
        score.lose++;
    } 
    else if(userChoice===`scissors` && computerChoice===`paper`){
        result=`you won`;
        score.win++;
    }
    document.querySelector('.result-text').innerText=`You have choosen ${userChoice}. Computer choose ${computerChoice} and ${result}.`
    scoreUpdate();
};

function reset(){
    score.win=0;
    score.lose=0;
    score.tie=0;
    scoreUpdate();
    resultTextUpdate();
}