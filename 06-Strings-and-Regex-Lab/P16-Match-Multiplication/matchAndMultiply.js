function matchAndMultiply(text) {
    let regex = /[-+]?[0-9]+\s*\*\s*[-+]?[0-9]*\.?[0-9]+/g;
    let matches = text.match(regex);

    for (let match of matches) {
        let tokens = match.split('*');
        let left = Number(tokens[0].trim());
        let right = Number(tokens[1].trim());
        let result = left * right;

        text = text.replace(match, result);
    }

   return text;
}

// console.log(matchAndMultiply(
//     'My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'
// ));