function getEvenPosElements(args) {
    let result = '';
    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0) {
            result += args[i] + ' ';
        }
    }

    return result.trim();
}

// console.log(getEvenPosElements(['20', '30', '40']));
// console.log(getEvenPosElements(['5', '10']));