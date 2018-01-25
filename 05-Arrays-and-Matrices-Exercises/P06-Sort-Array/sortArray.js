function sortArray(args) {
    args.sort(function (a, b) {
        return a.length !== b.length
            ? a.length - b.length
            : a > b
    });

    console.log(args.join('\r\n'));
}

// sortArray(['alpha', 'beta', 'gamma']);
// sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// sortArray(['Default', 'test', 'Deny', 'omen']);