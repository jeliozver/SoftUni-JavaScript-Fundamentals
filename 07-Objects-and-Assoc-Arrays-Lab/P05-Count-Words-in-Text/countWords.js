function countWords(input) {
    let text = input.join('\r\n');
    let result = {};
    let words = text
        .split(/[^\w]+/g)
        .filter(e => e !== '');

    for (let word of words) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 0;
        }
		
        result[word]++;
    }

    return JSON.stringify(result);
}

// console.log(countWords([
//     'Far too slow, you\'re far too slow.'
// ]));

// console.log(countWords([
//     'JS devs use Node.js ' +
//     'for server-side JS.-- JS for devs'
// ]));