function getIncreasingSubsequence(args) {
    let currentMax = args[0];
    let result = [currentMax];

    for (let i = 1; i <= args.length; i++) {
        if (args[i] >= currentMax) {
            currentMax = args[i];
            result.push(currentMax);
        }
    }

    console.log(result.join('\r\n'));
}

// getIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// getIncreasingSubsequence([1, 2, 3, 4]);
// getIncreasingSubsequence([20, 3, 2, 15, 6, 1]);