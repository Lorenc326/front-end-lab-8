let prom = prompt('Enter natural number: ', '');
let n = Number(prom);
let pyramid = '';

if(!isNaN(parseFloat(prom)) && isFinite(prom) && (n <= 20) && (n > 0)){

    for(let row = 0; row < n; row++){
        for(let space = n - row; space > 1; space--){
            pyramid += `   `;
        }
        for(let brick = 0; brick <= 2*row; brick++){
            pyramid += '[~]';
        }
        pyramid += '\n'
    }
    console.log(pyramid);
} else{
    console.error('Incorrect!!!');
}