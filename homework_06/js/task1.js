let abc = [];
let incorrectData = false;
let square;
let p;
let typeOfTriangle = "";

function isCorrectData(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && (Number(n)>0);
}

for(let i =0; i<3; i++){
    abc[i] = prompt(`Set value for ${i+1} side `, '');
    if(isCorrectData(abc[i])){
        abc[i] = Number(abc[i]);  // string -> number
    } else{
        incorrectData = true;
    }
}

abc.sort();
let [a, b, c] = abc;

//last check, check if two values biger than third
if((a+b)<= c || (a+c)<= b || (b+c)<= a){
    incorrectData = true;
}

if(incorrectData){
    console.log("Incorrect data");
} else{
    // here we have all our calculations
    p = (a + b + c)/2;
    if(Number.isInteger(Math.sqrt(p*(p-a)*(p-b)*(p-c)))){
        square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    } else{
        square = Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(2);
    }
    if(a*a + b*b == c*c){
        typeOfTriangle = "right triangle";
    } else if (a==b==c){
        typeOfTriangle = "equilateral triangle";
    } else if (a==b || b==c || a==c){
        typeOfTriangle = "isosceles triangle";
    } else{
        typeOfTriangle = "scalene triangle";
    }
    console.log(`Type of triangle is ${typeOfTriangle} and square is ${square}`);
}
