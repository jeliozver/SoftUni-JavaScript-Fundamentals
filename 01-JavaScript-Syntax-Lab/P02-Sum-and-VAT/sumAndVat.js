function sumAndVat(args) {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    let vat = sum * 0.20;
    let total = sum + vat;

    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}

// sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);