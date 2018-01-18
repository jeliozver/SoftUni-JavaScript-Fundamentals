function quadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c);

    let bNegPos = 0;
    if (b < 0) {
        bNegPos = Math.abs(b);
    } else {
        bNegPos = -Math.abs(b);
    }

    if (d > 0) {
        let x1 = (bNegPos + Math.sqrt(d)) / (2 * a);
        let x2 = (bNegPos - Math.sqrt(d)) / (2 * a);

        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));

    } else if (d === 0) {
        let x = bNegPos / (2 * a);

        console.log(x);
    } else {
        console.log('No');
    }
}

// quadraticEquation(6, 11, -35);
// quadraticEquation(1, -12, 36);
// quadraticEquation(5, 2 , 1);