if(confirm('Do you want to play a game?')){
    let attemps = 3;
    let play = true;
    let prize = 0;
    let numb;
    let possPrize = 10;
    let maxNumb = 5;

    while(attemps){
        numb = prompt(
`Enter a number from 0 to ${maxNumb}
Attempts left: ${attemps--}
Total prize: ${prize}$
Possible prize on current attempt: ${possPrize}$`);
        alert(numb);
    }

} else{
    console.log('You did not become a millionaire');
}