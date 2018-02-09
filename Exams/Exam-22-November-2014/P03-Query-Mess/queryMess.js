function queryMess(input) {
    let regex = /([^&=?]*)=([^&=]*)/g;
    let trimPattern = /((%20|\+)+)/g;

    for (let line of input) {
        let matches = regex.exec(line);
        let result = new Map();

        while (matches) {
            let field = matches[1];
            field = field
                .replace(trimPattern, ' ')
                .trim();

            let value = matches[2];
            value = value
                .replace(trimPattern, ' ')
                .trim();

            if (!result.has(field)) {
                result.set(field, []);
            }

            result.get(field).push(value);

            matches = regex.exec(line);
        }

        let output = '';
        for (let [key, values] of result) {
            output += `${key}=[`;
            output += `${values.join(', ')}]`;
        }

        console.log(output);
    }
}

// queryMess([
//     'foo=%20foo&value=+val&foo+=5+%20+203',
//     'foo=poo%20&value=valley&dog=wow+',
//     'url=https://softuni.bg/trainings/coursesinstances/details/1070',
//     'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php',
// ]);