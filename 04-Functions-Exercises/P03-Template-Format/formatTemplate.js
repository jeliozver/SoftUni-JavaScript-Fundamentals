function formatTemplate(args) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\r\n<quiz>\r\n';

    for (let i = 0; i < args.length; i+= 2) {
        let question = args[i];
        let answer = args[i + 1];

        xml += `<question>\r\n${question}\r\n</question>\r\n<answer>\r\n${answer}\r\n</answer>\r\n`;
    }

    xml += '</quiz>';
    console.log(xml);
}

// formatTemplate([
//     "Who was the forty-second president of the U.S.A.?",
//     "William Jefferson Clinton"]
// );
// formatTemplate([
//     "Dry ice is a frozen form of which gas?",
//     "Carbon Dioxide",
//     "What is the brightest star in the night sky?",
//     "Sirius"]
// );