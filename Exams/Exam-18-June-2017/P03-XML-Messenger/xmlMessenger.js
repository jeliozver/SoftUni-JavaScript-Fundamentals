function xmlMessenger(input) {
    // Check for characters before opening tag and after closing tag
    // If the index of the last '<message' substring is not 0 - Invalid
    // If the index of the first '</message>' substring is not the last 10 characters - Invalid
    let testStart = input.lastIndexOf('<message');
    let testEnd = input.indexOf('</message>');
    if (testStart !== 0 || input.length - testEnd !== 10) {
        console.log('Invalid message format');
        return;
    }

    // Check for invalid attributes
    // Match all valid attributes and remove them from the opening tag
    // If the open tag is not empty there are invalid attributes
    let openTagPattern = /<message[ ]+.+?>/;
    let validAttribute = /([ ]*[a-z]+="[A-Za-z0-9 .]+"[ ]*)/g;
    let openTag = input.match(openTagPattern);
    let isValid = openTag[0].replace(validAttribute, '');
    if (isValid !== '<message>') {
        console.log('Invalid message format');
        return;
    }

    // Check if both 'to' and 'from' attributes exist
    let fromPattern = /[ ]*\bfrom="([A-Za-z0-9 .]+)"[ ]*/;
    let toPattern = /[ ]*\bto="([A-Za-z0-9 .]+)"[ ]*/;
    let sender = openTag[0].match(fromPattern);
    let recipient = openTag[0].match(toPattern);
    if (!sender || !recipient) {
        console.log('Missing attributes');
        return;
    }

    // Get message
    let messagePattern = /<message[ ]*.+?>((.|\n)*)<\/message>/g;
    let messageMatch = messagePattern.exec(input);
    let message = messageMatch[1].split('\n');

    // Construct html
    let html = '<article>\n';
    html += `  <div>From: <span class="sender">${sender[1]}</span></div>\n`;
    html += `  <div>To: <span class="recipient">${recipient[1]}</span></div>\n`;
    html += `  <div>\n`;
    for (let i = 0; i < message.length; i++) {
        html += `    <p>${message[i]}</p>\n`;
    }
    html += `  </div>\n`;
    html += '</article>';
    console.log(html);
}