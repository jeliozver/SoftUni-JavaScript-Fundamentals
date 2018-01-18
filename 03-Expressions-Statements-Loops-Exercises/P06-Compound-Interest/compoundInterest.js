function compoundInterest(args) {
    let principalSum = args[0];
    let interestRate = args[1] / 100;
    let compPeriod = args[2];
    let timespanYears = args[3];

    let compFreq = 12 / compPeriod;

    let compInterest = principalSum * Math.pow(1 + (interestRate / compFreq), compFreq * timespanYears);

    console.log(compInterest.toFixed(2));
}

// compoundInterest([1500, 4.3, 3, 6]);
// compoundInterest([100000, 5, 12, 25]);