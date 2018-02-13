if(confirm('Do you want to play a game?')){
    let attemps = 3;
    let prize = 0;
    let prom, numb, randNumb, startPossPrice;
    let possPrize = 10;
    let maxNumb = 5;

    while(attemps){
        if(attemps===3){
            startPossPrice = possPrize; // need for correct calculations of prize++
        }
        prom = prompt(
`Enter a number from 0 to ${maxNumb}
Attempts left: ${attemps--}
Total prize: ${prize}$
Possible prize on current attempt: ${possPrize}$`, '');

        randNumb = Math.floor(Math.random()*(maxNumb+1));    // set random number
        numb = Number(prom);
        if(!isNaN(parseFloat(prom)) && isFinite(prom) && (numb <= maxNumb) && (numb >= 0) && randNumb===numb){     //check input data and coincidence of numbers
            maxNumb *= 2;
            prize += possPrize;
            possPrize = startPossPrice * 3;
            attemps = 3;
        } else{
            possPrize = Math.floor(possPrize/2);
        }

     if(attemps===0){               // If user don`t guess the number
         console.log(`Thank you for a game. Your prize is: ${prize}$`);
         if(confirm('Do you want to play again?')){                    //restart all data
             attemps = 3;
             prize = 0;
             maxNumb = 5;
             possPrize = 10;
         }
     }
    }
} else{
    console.log('You did not become a millionaire');
}