function getFilteredArray(arr, func) {
    let filtrArr = [];
    forEach(arr, elem=>{
        if(func(elem)){
            filtrArr.push(elem);
        }
    });
    return filtrArr;
}