function jansNotation(input) {
    let regex = /[0-9]+/;
    let saved = [];
    while (input.length > 0) {
        if (regex.test(input[0])) {
            saved.push(input.shift());
        } else {
            let operator = input.shift();
            if (saved.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            if (input.length === 0 && saved.length > 2) {
                console.log('Error: too many operands!');
                return;
            }

            let result = 0;
            let second = saved.pop();
            let first = saved.pop();

            switch (operator) {
                case '+':
                    result = first + second;
                    break;
                case '-':
                    result = first - second;
                    break;
                case '*':
                    result = first * second;
                    break;
                case '/':
                    result = first / second;
                    break;
            }

            saved.push(result);
            input.unshift.apply(input, saved);
            saved = [];
        }
    }

    if (saved.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(saved.join(''));
    }
}

// jansNotation([
//     7,
//     33,
//     8,
//     '-'
// ]);