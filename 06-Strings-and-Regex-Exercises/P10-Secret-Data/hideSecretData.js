function hideSecretData(args) {
    let nameRegex = /(\*[A-Z][A-Za-z]*)[\t ]/g;
    let phoneRegex = /(\+[0-9\-]{10})[\t ]/g;
    let idRegex = /(![A-Za-z0-9]+)[\t ]/g;
    let baseRegex = /(_[A-Za-z0-9]+)[\t ]/g;

    for (let line of args) {
        line += ' ';
        let nameRep = line.match(nameRegex);
        let phoneRep = line.match(phoneRegex);
        let idRep = line.match(idRegex);
        let baseRep = line.match(baseRegex);

        if (nameRep) {
            line = replace(line, nameRep);
        }
        if (phoneRep) {
            line = replace(line, phoneRep);
        }
        if (idRep) {
            line = replace(line, idRep);
        }
        if (baseRep) {
            line = replace(line, baseRep);
        }

        console.log(line.trim());
    }

    function replace(text, matches) {
        for (let i = 0; i < matches.length; i++) {
            let match = matches[i];
            let rep = '|'.repeat(match.length - 1) + ' ';
            text = text.replace(match, rep);
        }

        return text;
    }
}

// hideSecretData([
//     'Agent *Ivankov was in room when it all happened.',
//     'The person in the room was heavily armed.',
//     'Agent *Ivankov had to act quick in order.',
//     'He picked up his phone and called some unknown number.',
//     'I think it was +555-49-796',
//     'I can\'t really remember...',
//     'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
//     'Then after that he disappeared from my sight.',
//     'As if he vanished in the shadows.',
//     'A moment, shorter than a second, later, I saw the person flying off the top floor.',
//     'I really don\'t know what happened there.',
//     'This is all I saw, that night.',
//     'I cannot explain it myself...',
// ]);