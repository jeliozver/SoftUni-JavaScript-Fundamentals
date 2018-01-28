function censorText(text, bannedWords) {
    for (let i = 0; i < bannedWords.length; i++) {
        let current = bannedWords[i];
        let dashes = '-'.repeat(current.length);
        let isWordPresent = text.indexOf(current);
        while (isWordPresent > 0) {
            text = text.replace(current, dashes);
            isWordPresent = text.indexOf(current);
        }
    }

    return text;

}

function censorTextRegex(text, bannedWords) {
    for (let i = 0; i < bannedWords.length; i++) {
        let current = bannedWords[i];
        let dashes = '-'.repeat(current.length);
        let isWordPresent = text.indexOf(current) > 0;
        if (isWordPresent) {
            let regex = new RegExp(''+current+'', 'g');
            text = text.replace(regex, dashes);
        }
    }

    return text;
}

// console.log(censorText(
//     'roses are red, violets are blue',
//     [', violets are', 'red']
// ));

// console.log(censorTextRegex(
//     'roses are red, violets are blue',
//     [', violets are', 'red']
// ));