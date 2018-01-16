function letterOccurrances(string, letter) {
    let occurrances = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            occurrances++;
        }
    }

    console.log(occurrances);
}

// letterOccurrances('hello', 'l');