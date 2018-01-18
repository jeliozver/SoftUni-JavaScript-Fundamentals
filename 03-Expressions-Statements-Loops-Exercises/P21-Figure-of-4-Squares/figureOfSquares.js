function figureOfSquares(n) {
    let midFramePos = Math.floor(n / 2 + 1);
    let height = n;
    if (n % 2 === 0) {
        height--;
        midFramePos--;
    }

    let slashes = '-'.repeat(n - 2);
    let spaces = ' '.repeat(n - 2);

    let printFrame = `+${slashes}+${slashes}+`;
    let printPadding = `|${spaces}|${spaces}|`;

    for (let i = 1; i <= height; i++) {
        if (i === 1 || i === height || i === midFramePos) {
            console.log(printFrame);
        } else {
            console.log(printPadding);
        }
    }
}

// figureOfSquares(4);
// figureOfSquares(5);
// figureOfSquares(6);
// figureOfSquares(7);