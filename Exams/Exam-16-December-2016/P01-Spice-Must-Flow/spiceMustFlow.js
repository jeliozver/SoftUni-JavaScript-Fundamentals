function spiceMustFlow(input) {
    let operationDays = 0;
    let extractedSpice = 0;
    let currentYield = Number(input[0]);

    while(currentYield >= 100) {
        operationDays++;
        extractedSpice += currentYield - 26;
        currentYield -= 10;

        if (extractedSpice < 0) {
            extractedSpice = 0;
        }
    }

    extractedSpice -= 26;
    if (extractedSpice < 0) {
        extractedSpice = 0;
    }

    console.log(operationDays);
    console.log(extractedSpice);
}

// spiceMustFlow(['111']);
// spiceMustFlow(['450']);
// spiceMustFlow(['200']);