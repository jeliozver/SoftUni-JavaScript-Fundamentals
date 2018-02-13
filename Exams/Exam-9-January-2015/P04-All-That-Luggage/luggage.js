function luggage(input) {
    input.pop();
    let sortingCriteria = input.pop();
    let luggageLog = {};
    for (let line of input) {
        let args = line.split(/\.*\*\.*/g);
        let [owner, luggage, isFood, isDrink, isFragile, weight, transfer] = args;
        weight = Number(weight);
        isFood = isFood === 'true';
        isDrink = isDrink === 'true';
        isFragile = isFragile === 'true';
        let type = '';
        if (isFood) type = 'food';
        if (isDrink) type = 'drink';
        if (!isFood && !isDrink) type = 'other';

        if (!luggageLog.hasOwnProperty(owner)) {
            luggageLog[owner] = {};
        }

        luggageLog[owner][luggage] = {
            'kg': weight,
            'fragile': isFragile,
            'type': type,
            'transferredWith': transfer
        }
    }

    console.log(JSON.stringify(sortByCriteria(luggageLog, sortingCriteria)));

    function sortByCriteria(luggageLog, criteria) {
        if (criteria === 'strict') {
            return luggageLog;
        }

        let sorted = {};
        let unsorted = Object.keys(luggageLog);

        for (let name of unsorted) {
            if (!sorted.hasOwnProperty(name)) {
                sorted[name] = {};
            }
            let luggage = Object.keys(luggageLog[name]);
            if (criteria === 'luggage name') {
                luggage = luggage.sort();
            } else if (criteria === 'weight') {
                luggage = luggage.sort((a,b) => luggageLog[name][a].kg - luggageLog[name][b].kg);
            }

            for (let lug of luggage) {
                sorted[name][lug] = luggageLog[name][lug];
            }
        }

        return sorted;
    }
}

luggage([
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'strict',
    '',
]);