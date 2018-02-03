function rosettaStone(input) {
    let n = Number(input.shift());

    let template = [];
    for (let i = 0; i < n; i++) {
        let row = input.shift()
            .split(' ')
            .map(Number);

        template.push(row);
    }

    let encoded = [];
    while (input.length > 0) {
        let row = input.shift()
            .split(' ')
            .map(Number);

        encoded.push(row);
    }

    let decoded = encoded;
    let wheel = genCharArray('A', 'Z');
    wheel.unshift(' ');

    for (let i = 0; i < encoded.length; i++) {
        for (let j = 0; j < encoded[i].length; j++) {
            let first = encoded[i][j];
            let second = template[i % n][j % template[n - 1].length];
            let sum = first + second;

            if (sum > 26) {
                sum %= 27;
            }

            decoded[i][j] = wheel[sum];
        }
    }

    let result = '';
    for (let row of decoded) {
        result += row.join('');
    }

    console.log(result);

    function genCharArray(charA, charZ) {
        let arr = [];
        let i = charA.charCodeAt(0);
        let j = charZ.charCodeAt(0);

        for (; i <= j; ++i) {
            arr.push(String.fromCharCode(i));
        }

        return arr;
    }
}

// rosettaStone([
//     '2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22'
// ]);

// rosettaStone([
//     '2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22'
// ]);