function reverseNumber(num) {
    if (isNaN(num) || num%1){
        return null;
    }
    return parseInt(num
        .toString()
        .split('')
        .reverse()
        .join('')) * Math.sign(num);
}