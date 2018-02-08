function lost(keyword, text) {
    let coordinatesPattern = /(?:(north)|(east))(?:(.|\n)*?)(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let coordinates = coordinatesPattern.exec(text);
    let storage = [];

    while (coordinates) {
        let coordinate = '';
        if (coordinates[1] !== undefined) {
            coordinate = coordinates[4] + '.' + coordinates[5] + ' N';
            storage.push(coordinate);
        } else {
            coordinate = coordinates[4] + '.' + coordinates[5] + ' E';
            storage.push(coordinate);
        }

        coordinates = coordinatesPattern.exec(text);
    }

    let finalNorth = '';
    let finalEast = '';

    for (let c of storage) {
        if (c[c.length - 1] === 'N') {
            finalNorth = c;
        } else {
            finalEast = c;
        }
    }

    console.log(finalNorth);
    console.log(finalEast);

    let messagePattern = new RegExp(''+keyword+'\((.|\n)*?)'+keyword+'', 'gm');
    let messageMatch = messagePattern.exec(text);
    console.log(`Message: ${messageMatch[1]}`);
}

// lost(
//     '4ds',
//     'eaSt 19,432567noRt north east 53,123456north ' +
//     '43,3213454dsNot all those who wander are lost.4dsnorth 47,874532',
// );