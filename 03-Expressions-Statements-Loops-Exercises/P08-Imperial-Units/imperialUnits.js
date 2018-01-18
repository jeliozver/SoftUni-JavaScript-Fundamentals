function imperialUnits(input) {
    let feet = input;
    let inches = 0;

    while (true) {
        if (feet - 12 < 0) {
            break;
        }

        feet -= 12;
        inches++;
    }

    console.log(inches + '\'-' + feet + '\"')
}

// imperialUnits(36);
// imperialUnits(55);
// imperialUnits(11);