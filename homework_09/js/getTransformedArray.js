function getTransformedArray(arr, func) {
    let transArr = [];
    forEach(arr, (element) =>
        transArr.push(func(element))
    );
    return transArr;
}