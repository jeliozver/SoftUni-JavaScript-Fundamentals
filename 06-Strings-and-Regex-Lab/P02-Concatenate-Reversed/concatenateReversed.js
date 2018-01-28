function concatenateReversedLoops(args) {
    let result = '';
    for (let i = args.length - 1; i >= 0; i--) {
        let str = args[i];
        for (let j = str.length - 1; j >= 0; j--) {
            result += str[j];
        }
    }

    return result;
}

function concatenateReversedFunc(args) {
   return Array.from(args.join(''))
       .reverse()
       .join('');
}

// console.log(concatenateReversedLoops(['I', 'am', 'student']));
// console.log(concatenateReversedLoops(['race', 'car']));

// console.log(concatenateReversedFunc(['I', 'am', 'student']));
// console.log(concatenateReversedFunc((['race', 'car'])));