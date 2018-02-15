function getMin() {
    let min = arguments[0]; //initial
    for(let i = 1; i < arguments.length; i++){
        if(arguments[i]<min){
            min = arguments[i];
        }
    }
    return min;
}