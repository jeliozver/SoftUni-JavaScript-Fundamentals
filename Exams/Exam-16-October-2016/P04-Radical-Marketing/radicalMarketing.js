function radicalMarketing(input) {
    let database = new Map();

    for (let line of input) {
        let args = line.split('-');
        let person = args[0];
        if (args.length === 1) {
            if (!database.has(person)) {
                database.set(person, {
                    subscribers: new Set(),
                    subscribedTo: new Set(),
                });
            }
        } else {
            let personTwo = args[1];
            if (database.has(person) && database.has(personTwo)) {
                database.get(person).subscribedTo.add(personTwo);
                database.get(personTwo).subscribers.add(person);
            }
        }
    }

    let dbToSort = [...database];
    let dbSorted = sortSubscribers(dbToSort);
    let mvp = dbSorted[0];
    console.log(mvp[0]);

    let subscribers = [...mvp[1].subscribers];
    if (subscribers.length > 0) {
        for (let i = 0; i < subscribers.length; i++) {
            console.log(`${i + 1}. ${subscribers[i]}`);
        }
    }

    function sortSubscribers(arr) {
        arr.sort(function (a, b) {
            return a[1].subscribers.size !== b[1].subscribers.size
                ? b[1].subscribers.size - a[1].subscribers.size
                : b[1].subscribedTo.size - a[1].subscribedTo.size
        });

        return arr;
    }
}

// radicalMarketing([
//     'A',
//     'B',
//     'C',
//     'D',
//     'A-B',
//     'A-B',
//     'B-A',
//     'C-A',
//     'D-A',
// ]);

// radicalMarketing([
//     'J',
//     'G',
//     'P',
//     'R',
//     'C',
//     'J-G',
//     'G-J',
//     'P-R',
//     'R-P',
//     'C-J',
// ]);