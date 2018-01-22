function modifyAverage(num) {
    let numStr = num.toString();
    let sum = getSumOfDigits(numStr);
    let digitsCount = numStr.length;
    let average = sum / digitsCount;

    while (average <= 5.00) {
        numStr += '9';
        sum += 9;
        digitsCount++;
        average = sum / digitsCount;
    }

    console.log(numStr);

    function getSumOfDigits(numStr) {
        let sum = 0;
        for (let i = 0; i < numStr.length; i++) {
            sum += Number(numStr[i]);
        }

        return sum;
    }
}

// modifyAverage(101);
// modifyAverage(5835);