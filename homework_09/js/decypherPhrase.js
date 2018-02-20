function decypherPhrase(options, str) {
    let newOptions ={};
    for (let key in options){
        newOptions[options[key]] = key;
    }
    return cypherPhrase(newOptions, str);
}