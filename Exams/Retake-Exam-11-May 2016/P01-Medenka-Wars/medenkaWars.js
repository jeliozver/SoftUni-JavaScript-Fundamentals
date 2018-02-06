function medenkaWars(input) {
    let vitkorAttacks = [];
    let naskorAttacks = [];

    for (let line of input) {
        let args = line.split(' ');
        let medenkas = Number(args[0]);
        let color = args[1];

        if (color === 'white') {
            vitkorAttacks.push(medenkas);
        } else {
            naskorAttacks.push(medenkas);
        }
    }

    let medenkaDamage = 60;
    let vitkorDamage = 0;

    for (let i = 0; i < vitkorAttacks.length; i++) {
        if (vitkorAttacks[i] === vitkorAttacks[i + 1]) {
            vitkorDamage +=  vitkorAttacks[i] * medenkaDamage;
            vitkorDamage += (vitkorAttacks[i + 1] * medenkaDamage) * 2.75;
            i++;
        } else {
            vitkorDamage +=  vitkorAttacks[i] * medenkaDamage;
        }
    }

    let naskorDamange = 0;
    let currentStreak = 1;

    for (let i = 0; i < naskorAttacks.length; i++) {
        if (naskorAttacks[i] === naskorAttacks[i + 1]) {
            currentStreak++;
        } else {
            currentStreak = 1;
        }

        if (currentStreak === 5) {
            naskorDamange += naskorAttacks[i] * medenkaDamage;
            naskorDamange += (naskorAttacks[i + 1] * medenkaDamage) * 4.5;
            currentStreak = 1;
            i++;
        } else {
            naskorDamange += naskorAttacks[i] * medenkaDamage;
        }
    }

    if (vitkorDamage > naskorDamange) {
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${vitkorDamage}`);
    } else {
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${naskorDamange}`);
    }
}

// medenkaWars([
//     '5 white medenkas',
//     '5 dark medenkas',
//     '4 white medenkas',
// ]);

// medenkaWars([
//     '2 dark medenkas',
//     '1 white medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas',
//     '15 white medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas',
//     '2 dark medenkas',
// ]);