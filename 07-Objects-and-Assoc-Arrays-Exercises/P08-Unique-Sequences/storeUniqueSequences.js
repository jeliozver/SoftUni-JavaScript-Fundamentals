function storeUniqueSequences(input) {
    let uniqueSequences = new Map();
    for (let i = 0; i < input.length; i++) {
        let current = input[i]
            .split(/[\[\], ]/)
            .filter(e => e !== '')
            .map(Number);

        current.sort((a, b) => b - a);

        let isSame = false;
        for (let [arr, val] of uniqueSequences) {
            isSame = compare(current, arr);
            if (isSame) {
                break;
            }
        }
        
        if (!isSame) {
            uniqueSequences.set(current, 0);
        }
    }

    let sorted = [...uniqueSequences];
    sorted.sort((a, b) => a[0].length - b[0].length);

    for (let [sequence, b] of sorted) {
        console.log(`[${sequence.join(', ')}]`)
    }

    function compare(arr1, arr2) {
        return arr1.length === arr2.length &&
            arr1.reduce((a, b) => a && arr2.includes(b), true)
    }
}

// storeUniqueSequences([
//     '[-3, -2, -1, 0, 1, 2, 3, 4]',
//     '[10, 1, -17, 0, 2, 13]',
//     '[4, -3, 3, -2, 2, -1, 1, 0]',
// ]);

// storeUniqueSequences([
//     '[7.14, 7.180, 7.339, 80.099]',
//     '[7.339, 80.0990, 7.140000, 7.18]',
//     '[7.339, 7.180, 7.14, 80.099]',
// ]);