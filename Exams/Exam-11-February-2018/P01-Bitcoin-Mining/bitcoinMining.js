function bitcoinMining(input) {
    let shift = [];
    shift.push(' ');
    for (let i = 0; i < input.length; i++) {
        shift.push(Number(input[i]));
    }

    let oneGram = 67.51;
    let bitCoin = 11949.16;
    let collectedGold = 0;
    let firstDayBitCoin = 0;
    let bitCoins = 0;

    for (let i = 1; i < shift.length; i++) {
        let goldDay = shift[i] * oneGram;
        if (i % 3 === 0) {
            goldDay = goldDay - (goldDay * 0.3);
        }

        collectedGold += goldDay;

        while (collectedGold >= bitCoin) {
            bitCoins++;
            collectedGold -= bitCoin;
            if (firstDayBitCoin === 0) {
                firstDayBitCoin = i;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitCoins}`);
    if (firstDayBitCoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBitCoin}`);
    }
    console.log(`Left money: ${collectedGold.toFixed(2)} lv.`);
}