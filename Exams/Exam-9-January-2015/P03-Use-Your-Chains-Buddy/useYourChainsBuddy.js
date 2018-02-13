function useYourChainsBuddy(html) {
    let extractTextPattern = /<p>(.*?)<\/p>/g;
    let replacePattern = /\W|[A-Z]/g;

    let textLines = extractTextPattern.exec(html);
    let encryptedMessages = [];
    let decryptedMessages = [];

    while (textLines) {
        let matchGroup = textLines[1];
        matchGroup = matchGroup.replace(replacePattern, ' ');
        matchGroup = matchGroup.replace(/\s+/g, ' ');
        encryptedMessages.push(matchGroup);

        textLines = extractTextPattern.exec(html);
    }

    for (let message of encryptedMessages) {
        let result = '';
        for (let char of message) {
            if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 109) {
                let index = char.charCodeAt(0) + 13;
                result += String.fromCharCode(index);
            } else if (char.charCodeAt(0) >= 110 && char.charCodeAt(0) <= 122) {
                let index = char.charCodeAt(0) - 13;
                result += String.fromCharCode(index);
            } else {
                result += char;
            }
        }

        decryptedMessages.push(result);
    }

    console.log(decryptedMessages.join(''));
}