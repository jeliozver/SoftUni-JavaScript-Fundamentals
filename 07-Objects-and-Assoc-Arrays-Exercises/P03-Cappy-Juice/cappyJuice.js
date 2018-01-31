function cappyJuice(input) {
    let juiceQuantity = new Map();
    let juiceBottles = new Map();
    for (let line of input) {
        let args = line.split(' => ');
        let juice = args[0];
        let quantity = Number(args[1]);

        if (!juiceQuantity.has(juice)) {
            juiceQuantity.set(juice, 0);
        }
        let oldQuantity = juiceQuantity.get(juice);
        juiceQuantity.set(juice, oldQuantity + quantity);
        let currentJuice = juiceQuantity.get(juice);

        if (currentJuice >= 1000) {
            if (!juiceBottles.has(juice)) {
                juiceBottles.set(juice, 0);
            }

            let newBottles = Math.floor(currentJuice / 1000);
            let oldBottles = juiceBottles.get(juice);
            juiceBottles.set(juice, oldBottles + newBottles);

            let juiceLeft = currentJuice % 1000;
            juiceQuantity.set(juice, juiceLeft);
        }
    }

    for (let [juice, bottles] of juiceBottles) {
        console.log(`${juice} => ${bottles}`)
    }
}

// cappyJuice([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549',
// ]);

// cappyJuice([
//     'Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789',
// ]);