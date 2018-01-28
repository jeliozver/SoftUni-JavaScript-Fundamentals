function matchDates(args) {
    let regex = /\b[0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4}\b/g;
    for (let i = 0; i < args.length; i++) {
        let current = args[i];
        let test = regex.test(current);
        if (test) {
            let matches = current.match(regex);
            for (let match of matches) {
                let tokens = match.split('-');
    console.log(`${match} (Day: ${tokens[0]}, Month: ${tokens[1]}, Year: ${tokens[2]})`);
            }
        }
    }
}

// matchDates([
//     'I am born on 30-Dec-1994. 31-Dec-1900',
//     'This is not date: 512-Jan-1996.',
//     'My father is born on the 29-Jul-1955.',
// ]);

// matchDates([
//     '1-Jan-1999 is a valid date.',
//     'So is 01-July-2000.',
//     'I am an awful liar, by the way – Ivo, 28-Sep-2016.',
// ]);