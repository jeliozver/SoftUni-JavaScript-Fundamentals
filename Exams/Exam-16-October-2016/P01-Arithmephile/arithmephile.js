function arithmephile(input) {
    let numbers = input.map(Number);
    let maxProduct = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < numbers.length; i++) {
        let s = numbers[i] > 0 &&
            numbers[i] < 10 &&
            i !== numbers.length - 1;

        if (s) {
            let currentProduct = 1;
            let start = i + numbers[i];

            if (start > numbers.length - 1) {
                start--;
            }

            for (let j = start; j > i; j--) {
                currentProduct *= numbers[j];
            }

            if (currentProduct > maxProduct) {
                maxProduct = currentProduct;
            }
        }
    }

    console.log(maxProduct);
}

// arithmephile([
//     '10', '20', '2', '30',
//     '44', '3', '56', '20', '24'
// ]);

// arithmephile([
//     '100', '200', '2', '3',
//     '2', '3', '2', '1', '1',
// ]);