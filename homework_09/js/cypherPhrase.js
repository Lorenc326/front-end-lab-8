function cypherPhrase(options, str) {
    str = str.split('');
    return getTransformedArray(str, elem => options[elem] || elem).join('');
}