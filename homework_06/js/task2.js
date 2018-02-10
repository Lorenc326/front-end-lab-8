let incorrectData = false;
let usd_price = 27.1240;
let euro_price = 33.2324;

function isCorrectData(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && (Number(n)>0);
}

let euro = prompt('Amount of EURO: ', '');
let usd = prompt('Amount of USD: ', '');

if(isCorrectData(euro) && isCorrectData(usd)){
    euro = Number(euro);        // string -> number
    usd = Number(usd);
} else{
    incorrectData = true;
}

if(incorrectData){
    console.log("Incorrect data");
} else{
    console.log(`${parseFloat(euro.toFixed(2))} euros are equal ${parseFloat((euro*euro_price).toFixed(2))} UAH, ${parseFloat(usd.toFixed(2))} dollars are equal ${parseFloat((usd*usd_price).toFixed(2))} UAH, one euro is equal ${parseFloat((euro_price/usd_price).toFixed(2))} dollars`);
}
