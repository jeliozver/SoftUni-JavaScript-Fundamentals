function capitalizeWords(text) {
    let words = text.split(' ');
    let result = [];

    for (let word of words) {
        let first = word[0].toUpperCase();
        let lower = word.toLowerCase();
        let final = first.concat(lower.substring(1));
        result.push(final);
    }

    return result.join(' ');
}

// console.log(capitalizeWords('Capitalize these words'));
// console.log(capitalizeWords('Was that Easy? tRY thIs onE for SiZe!'));