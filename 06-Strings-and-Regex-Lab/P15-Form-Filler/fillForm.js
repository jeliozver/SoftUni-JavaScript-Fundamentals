function fillForm(name, email, phone, form) {
    let namePattern = /<![A-Za-z]+!>/g;
    let emailPattern = /<@[A-Za-z]+@>/g;
    let phonePatten = /<\+[A-Za-z]+\+>/g;

    for (let line of form) {
        line = line.replace(namePattern, name);
        line = line.replace(emailPattern, email);
        line = line.replace(phonePatten, phone);
        console.log(line);
    }
}

// fillForm(
//     'Pesho',
//     'pesho@softuni.bg',
//     '90-60-90',
//     ['Hello, <!username!>!',
//         'Welcome to your Personal profile.',
//         'Here you can modify your profile freely.',
//         'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//         'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//         'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
//     ]
// );