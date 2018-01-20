function printSquareOfStars(n) {
    let rep = ' *'.repeat(n - 1);
    for (let i = 1; i <= n; i++) {
        console.log('*' + rep);
    }
}

// printSquareOfStars(5);