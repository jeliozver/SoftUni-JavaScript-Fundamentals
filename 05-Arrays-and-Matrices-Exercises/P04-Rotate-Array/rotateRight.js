function rotateRight(args) {
    let rotations = Number(args.pop());
    if (rotations > args.length) rotations %= args.length;

    for (let i = 0; i < rotations; i++) {
        args.splice(0, 0, args.pop());
    }

    console.log(args.join(' '));
}

// rotateRight([1, 2, 3, 4, 2]);
// rotateRight(['Banana', 'Orange', 'Coconut', 'Apple', '15']);