function jsGoddess(input) {
    let database = {};

    for (let line of input) {
        let args = line.split(' & ');
        let [name, type, taskNum, score, lines] = args;
        taskNum = Number(taskNum);
        score = Number(score);
        lines = Number(lines);

        let taskNumStr = `Task ${taskNum}`;
        if (!database.hasOwnProperty(taskNumStr)) {
            let subTask = {
                name: name,
                type: type,
            };

            let task = {
                tasks: [],
                average: score,
                lines: lines,
            };

            task.tasks.push(subTask);

            database[taskNumStr] = task;
        } else {
            let subTask = {
                name: name,
                type: type,
            };

            database[taskNumStr].tasks.push(subTask);
            database[taskNumStr].average += score;
            database[taskNumStr].lines += lines;
        }
    }

    for (let task in database) {
        let fullScore = database[task].average;
        let tasksCount = database[task].tasks.length;
        database[task].average = fullScore / tasksCount;
    }

    let sorted = Object.entries(database);
    sorted = sortTasks(sorted);
    let result = {};
    for (let task of sorted) {
        task[1].tasks = sortArrays(task[1].tasks);
        task[1].average = parseFloat(task[1].average.toFixed(2));
        result[task[0]] = task[1];
    }

    console.log(JSON.stringify(result));

    function sortTasks(arr) {
        arr.sort(function (a, b) {
            return a[1].average !== b[1].average
                ? b[1].average - a[1].average
                : a[1].lines - b[1].lines
        });

        return arr;
    }

    function sortArrays(arr) {
        arr.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });

        return arr;
    }
}

// jsGoddess([
//     'Magic Wand & draw & 3 & 100 & 15',
//     'Dream Item & loops & 2 & 88 & 80',
//     'Knight Path & bits & 5 & 100 & 65',
//     'Basket Battle & conditionals & 2 & 100 & 120',
//     'Torrent Pirate & calculations & 1 & 100 & 20',
//     'Encrypted Matrix & nested loops & 4 & 90 & 52',
//     'Game of bits & bits & 5 &  100 & 18',
//     'Array Matcher & strings & 4 & 100 & 38',
//     'Fit box in box & conditionals & 1 & 100 & 95',
//     'Disk & draw & 3 & 90 & 15',
//     'Poker Straight & nested loops & 4 & 40 & 57',
//     'Friend Bits & bits & 5 & 100 & 81',
// ]);