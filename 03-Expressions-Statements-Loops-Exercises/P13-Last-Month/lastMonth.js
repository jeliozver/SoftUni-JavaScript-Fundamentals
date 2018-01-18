function lastMonth(args) {
    let month = args[1] - 1;
    let year = args[2];

    if (month === 0) {
        month = 12;
    }

    let thirtyDays = [ 4, 6, 9, 11 ];
    let thirtyOneDays = [ 1, 3, 5, 7, 8, 10, 12 ];
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0)
        || year % 400 === 0;

    if (thirtyDays.includes(month)) {
        console.log(30);
    } else if (thirtyOneDays.includes(month)) {
        console.log(31);
    } else {
        if (isLeapYear) {
            console.log(29);
        } else {
            console.log(28);
        }
    }
}

// lastMonth([17, 3, 2020]);
// lastMonth([13, 3, 2005]);
// lastMonth([1, 1, 1990]);