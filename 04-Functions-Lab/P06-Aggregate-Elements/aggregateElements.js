function aggregateElements(args) {
    function aggregate(arr, start, func) {
        let val = start;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }

        console.log(val);
    }

    aggregate(args, 0, (a, b) => a + b);
    aggregate(args, 0, (a, b) => a + 1 / b);
    aggregate(args, '', (a, b) => a + b);
}

// aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);