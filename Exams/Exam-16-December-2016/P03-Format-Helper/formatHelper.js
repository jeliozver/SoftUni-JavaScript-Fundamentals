function formatHelper(input) {
    let text = input[0];
    let spacesBeforeAfter = /\s*([.,!?:;])\s*/g;
    let dotsNumber = /\.\s(?=[0-9])/g;
    let quoting = /"\s*(.+?)\s*"/g;
    let punctuation = /([.,!?:;]) (?=[.,!?:;])/g;

    text = text.replace(spacesBeforeAfter, (match, group) => `${group} `);
    text = text.replace(dotsNumber, '.');
    text = text.replace(quoting, (match, group) => `"${group}"`);
    text = text.replace(punctuation, (match, group) => `${group}`);

    return text;
}

// console.log(formatHelper([
//     'Terribly formatted text      .  ' +
//     'With chaotic spacings." Terrible quoting   "! ' +
//     'Also this date is pretty confusing : 20   .   12.  16 . 2012.'
// ]));

// console.log(formatHelper([
//     'Make,sure to give:proper spacing ' +
//     'where is needed... !'
// ]));