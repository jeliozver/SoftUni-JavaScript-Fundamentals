function cookingByNumbers(args) {
    let num = Number(args[0]);

    for (let i = 1; i < args.length; i++) {
        let operation = args[i];
        console.log(num = operateNum(num, operation));
    }

    function operateNum(num, operation) {
        switch (operation) {
            case 'chop': return num / 2;
            case 'dice': return Math.sqrt(num);
            case 'spice': return ++num;
            case 'bake': return num * 3;
            case 'fillet': return num - (num * 0.20);
        }
    }
}

// cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
// cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);