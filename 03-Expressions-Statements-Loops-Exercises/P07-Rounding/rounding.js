function rounding(args) {
    let number = args[0];
    let precision = args[1];

    if (precision > 15) {
        precision = 15;
    }

    let numStr = number
        .toString()
        .split('.');
    let afterDec = numStr[1].length;

    if (precision > afterDec) {
        precision = afterDec;
    }

    console.log(number.toFixed(precision));
}

// rounding([10.5, 3]);
// rounding([3.1415926535897932384626433832795, 2]);