function isPrime(num) {
    if (isNaN(num) || num%1 || num<2) {
        return false;
    }
    if(num%2 === 0){
        return num === 2; // check "even" and "2"
    }
    const sqr = Math.sqrt(num); // faster check
    for (let i = 3; i <= sqr; i+=2) { //check only odd numbers
        if (num%i === 0) {
            return false;
        }
    }
    return true;
}
