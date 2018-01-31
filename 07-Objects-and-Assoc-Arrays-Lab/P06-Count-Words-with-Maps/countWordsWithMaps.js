function countWordsWithMaps(input) {
    let text = input
        .join('\r\n')
        .toLowerCase();
    let result = new Map();
    let words = text
        .split(/[^\w]+/g)
        .filter(e => e !== '');

    for (let word of words) {
        if (!result.has(word)) {
           result.set(word, 1);
        } else {
            result.set(word, result.get(word) + 1)
        }
    }

    let sorted = Array.from(result.keys()).sort();

    for (let word of sorted) {
        let key = word;
        let value = result.get(key);
        console.log(`'${key}' -> ${value} times`)
    }
}

// countWordsWithMaps([
//     'Far too slow, you\'re far too slow.'
// ]);

// countWordsWithMaps([
//     'JS devs use Node.js ' +
//     'for server-side JS.-- JS for devs'
// ]);