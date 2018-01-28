function splitExpression(text) {
    let result =  text
        .split(/[\s.();,]+/)
        .filter(e => e !== '');

    return result.join('\r\n');
}

// console.log(splitExpression(
//     'let sum = 4 * 4,b = "wow";'
// ));
// console.log(splitExpression(
//     'let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'
// ));