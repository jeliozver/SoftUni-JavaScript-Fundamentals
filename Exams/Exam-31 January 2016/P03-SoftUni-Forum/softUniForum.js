function softUniForum(input) {
    // Get list of banned users
    let bannedUsers = input.pop();
    // Combine whole input into one big string with special word for separator
    // in order to split by it at the end
    let bigString = '';
    for (let line of input) {
        bigString += line + ' razdelitel ';
    }

    // Save data between code tags before touching the string in order to restore it later
    let codeTagsRegex = /<code>(.*?)<\/code>/g;
    let codeTagBefore = bigString.match(codeTagsRegex);

    // Replace all valid non banned users
    let validUserNameRegex = /#(\b[a-zA-Z][\w\-]+[a-zA-Z0-9]\b)/g;
    bigString = bigString.replace(validUserNameRegex, replacer);

    // Restore code between valid code tags in case something was replaced
    let codeTagsAfter = bigString.match(codeTagsRegex);
    if (codeTagBefore !== null) {
        for (let i = 0; i < codeTagsAfter.length; i++) {
            bigString = bigString.replace(codeTagsAfter[i], codeTagBefore[i]);
        }
    }

    // Print resulted string, splitting by the special separator
    let result = bigString.split(' razdelitel ');
    console.log(result.join('\n'));

    function replacer(match, group1) {
        let check = group1.indexOf(' razdelitel ');
        if (check >= 0) {
            let replacement = group1
                .split(' razdelitel ')
                .filter(e => e !== '');
            replacement = replacement[0];

            if (bannedUsers.includes(replacement)) {
                return '*'.repeat(group1.length) + ' razdelitel ';
            } else {
                replacement = `<a href="/users/profile/show/${replacement}">${replacement}</a>`;
                replacement += ' razdelitel ';
                return replacement;
            }
        }

        if (bannedUsers.includes(group1)) {
            return '*'.repeat(group1.length);
        } else {
            return `<a href="/users/profile/show/${group1}">${group1}</a>`;
        }
    }
}