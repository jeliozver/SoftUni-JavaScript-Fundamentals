function printFirstLastKElements(args) {
    let k = args.shift();

    console.log(args.slice(0, k).join(' '));
    console.log(args.slice(-k).join(' '));
}

// printFirstLastKElements([2, 7, 8, 9]);
// printFirstLastKElements([3, 6, 7, 8, 9]);
// printFirstLastKElements([1, 5]);