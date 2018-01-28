function parseEmails(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split('@');
        let username = args[0];
        username += '.';
        let domains = args[1]
            .split('.')
            .forEach(e => username += e[0]);

        result.push(username);
    }

    return result.join(', ');
}

// console.log(parseEmails([
//     'peshoo@gmail.com',
//     'todor_43@mail.dir.bg',
//     'foo@bar.com',
// ]));
