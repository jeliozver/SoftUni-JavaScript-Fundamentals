function getLowestPrices(input) {
    let productByTowns = new Map();
    for (let line of input) {
        let args = line.split(' | ');
        let town = args[0];
        let product = args[1];
        let price = Number(args[2]);
        if (!productByTowns.has(product)) {
            productByTowns.set(product, new Map());
        }
        if (!productByTowns.get(product).has(town)) {
            productByTowns.get(product).set(town, 0);
        }

        productByTowns.get(product).set(town, price);
    }

    for (let [product,towns] of productByTowns) {
        let result = `${product} -> `;
        let lowestPrice = Number.MAX_VALUE;
        let lowestTown = ``;

        for (let [town, price] of towns) {
            if (price < lowestPrice) {
                lowestPrice = price;
                lowestTown = town;
            }
        }

        result += `${lowestPrice} (${lowestTown})`;
        console.log(result);
    }
}

// getLowestPrices([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10',
// ]);