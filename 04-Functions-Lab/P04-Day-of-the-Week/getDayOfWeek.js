function getDayOfWeek(str) {
    let days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    };

    if (days.hasOwnProperty(str)) {
        return days[str];
    } else {
        return 'error';
    }
}

// console.log(getDayOfWeek('Monday'));
// console.log(getDayOfWeek('Frabjoyousday'));
// console.log(getDayOfWeek('Friday'));