function spyMaster(input) {
    let specialKey = input.shift();
    let pattern = '((?: |^\)'+specialKey+'\[ ]+)([!#$%A-Z]{8,})( |\\.|,|$)';
    let regex = new RegExp(pattern, 'gi');

    for (let line of input) {
        line = line.replace(regex, replacer);
        console.log(line);
    }

    function replacer(match, group1, group2, group3) {
        if (!hasLowerCase(group2)) {
            group2 = group2
                .replace(/!/g, '1')
                .replace(/%/g, '2')
                .replace(/#/g, '3')
                .replace(/\$/g, '4')
                .replace(/[A-Z]/g, x => x.toLowerCase());
        }
        
        return group1 + group2 + group3;
    }

    function hasLowerCase(str) {
        return (/[a-z]/g.test(str));
    }
}

// spyMaster([
//     'specialKey',
//     'In this text the specialKey HELLOWORLD! is correct, but',
//     'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
//     'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!',
// ]);

// spyMaster([
//     'enCode',
//     'Some messages are just not encoded what can you do?',
//     'RE - ENCODE THEMNOW! - he said.',
//     'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.',
// ]);