function validateEmail(email) {
    let regex = /\b[A-Za-z0-9]+\@[a-z]+\.[a-z]+\b/;
    let isValid = regex.test(email);
    if (isValid) {
        return 'Valid';
    } else {
        return 'Invalid';
    }
}

// console.log(validateEmail('valid@email.bg'));
// console.log(validateEmail('invalid@emai1.bg'));