function extractText(str) {
    let result = [];
    let open = str.indexOf('(');
    while (open >= 0) {
        let close = str.indexOf(')', open);
        if (close === -1) {
            break;
        }

        let text = str.substring(open + 1, close);
        result.push(text);
        open = str.indexOf('(', close);
    }

    return result.join(', ');
}

function extractTextRegex(str) {
    let result = [];
    let pattern = /\((.*?)\)/g;

    while (true) {
        let match = pattern.exec(str);
        if (match) {
            result.push(match[1]);
        } else {
            break;
        }
    }

    return result.join(', ');
}

// console.log(extractText('Rakiya (Bulgarian brandy) ' +
//     'is self-made liquor (alcoholic drink)'));

// console.log(extractTextRegex('Rakiya (Bulgarian brandy) ' +
//     'is self-made liquor (alcoholic drink)'));