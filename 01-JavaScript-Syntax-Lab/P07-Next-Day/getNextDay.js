function getNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let nextDate =  new Date(date.getTime() + 86400000);

    console.log(nextDate.getFullYear() + '-'
        + (nextDate.getMonth() + 1) + '-'
        + nextDate.getDate());
}

// getNextDay(2016, 9, 30);