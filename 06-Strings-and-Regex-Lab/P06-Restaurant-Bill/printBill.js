function printBill(args) {
    let products = args
        .filter((e, i) => i % 2 === 0)
        .join(', ');

    let prices = args
        .filter((e, i) => i % 2 !== 0)
        .map(Number)
        .reduce((a, b) => a + b);

    console.log(`You purchased ${products} for a total sum of ${prices}`)
}

// printBill([
//     'Beer Zagorka', '2.65',
//     'Tripe soup', '7.80',
//     'Lasagna', '5.69',
// ]);

// printBill([
//     'Cola', '1.35',
//     'Pancakes', '2.88',
// ]);