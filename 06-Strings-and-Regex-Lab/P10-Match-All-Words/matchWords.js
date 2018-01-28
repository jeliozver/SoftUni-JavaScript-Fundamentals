function matchWords(text) {
    let regex = /\w+/g;
    return text
        .match(regex)
        .join('|');
}

// console.log(matchWords(
//     'A Regular Expression needs to have ' +
//     'the global flag in order to match ' +
//     'all occurrences in the text'
// ));

// console.log(matchWords(
//     '_(Underscores) are also word characters'
// ));