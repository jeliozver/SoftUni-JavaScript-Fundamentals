function numbersOneToN(n) {
    let result = '';
    let nAsNum =  parseInt(n);

    for (let i = 1; i <= nAsNum; i++) {
        result += i;
    }

    console.log(result);
}

// numbersOneToN('11');