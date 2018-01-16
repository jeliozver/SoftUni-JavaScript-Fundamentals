function colorfulNumbers(n) {
    let result = '<ul>\r\n';

    for (let i = 1; i <= n; i++) {
        let color = 'blue';
        if (i % 2 !== 0) {
            color = 'green';
        }
        result += `<li><span style='color: ${color}'>${i}</span></li>\r\n`;
    }

    result += '</ul>';

    console.log(result);
}

// colorfulNumbers(10);