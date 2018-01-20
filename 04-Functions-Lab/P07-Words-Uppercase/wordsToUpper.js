function wordsToUpper(str) {
    return str
        .toUpperCase()
        .split(/\W+/)
        .filter(w => w !== '')
        .join(', ');
}

// console.log(wordsToUpper('Hi,  #@$#$^^ how!are you?'));
// console.log(wordsToUpper('hello'));