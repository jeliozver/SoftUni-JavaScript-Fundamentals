function usernameCatalogue(input) {
    let uniqueNames = new Set();
    for (let name of input) {
        uniqueNames.add(name);
    }

    uniqueNames = [...uniqueNames];
    sortArray(uniqueNames);
    console.log(uniqueNames.join('\r\n'));

    function sortArray(arr) {
        arr.sort(function (a, b) {
            return a.length !== b.length
                ? a.length - b.length
                : a.localeCompare(b)
        });

        return arr;
    }
}

// usernameCatalogue([
//     'Ashton',
//     'Ashton',
//     'Kutcher',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston',
// ]);

// usernameCatalogue([
//     'Denise',
//     'Ignatius',
//     'Iris',
//     'Isacc',
//     'Indie',
//     'Dean',
//     'Donatello',
//     'Enfuego',
//     'Benjamin',
//     'Biser',
//     'Bounty',
//     'Renard',
//     'Rot',
// ]);