function getTransformedArray(arr, func) {
    let transArr = [];
    forEach(arr, elem => transArr.push(func(elem)) );
    return transArr;
}