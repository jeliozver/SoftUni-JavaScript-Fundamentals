function countWordOccurrences(text, word) {
    let regex = new RegExp('\\b'+word+'\\b', 'gi');
    let result = text.match(regex);
    if (result) {
        return result.length
    }

    return 0;
}

// console.log(countWordOccurrences(
//     'The waterfall was so high, that the child couldn’t see its peak.',
//     'the',
// ));

// console.log(countWordOccurrences(
//     'How do you plan on achieving that? How? How can you even think of that?',
//     'how',
// ));

// console.log(countWordOccurrences(
//     'There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
//     'there',
// ));