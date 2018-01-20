function functionalCalculator(a, b, op) {
    let add = function (a, b) {
        return a + b;
    };
    let subtract = function (a, b) {
        return a - b;
    };
    let multiply = function (a, b) {
        return a * b;
    };
    let divide = function (a, b) {
        return a / b;
    };

    switch (op) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
    }
}

// console.log(functionalCalculator(3, 3, '/'));
// console.log(functionalCalculator(18, -1, '*'));