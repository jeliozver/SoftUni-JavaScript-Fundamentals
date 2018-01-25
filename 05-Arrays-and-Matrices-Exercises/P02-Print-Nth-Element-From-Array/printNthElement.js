function printNthElement(args) {
    let n = Number(args.pop());

    for (let i = 0; i < args.length; i += n) {
        console.log(args[i]);
    }
}

// printNthElement([5, 20, 31, 4, 20, 2]);
// printNthElement(['dsa', 'asd', 'test', 'tset', 2]);
// printNthElement([1, 2, 3, 4, 5, 6]);