function monthlyCalendar([day, month, year]) {
    let html = '<table>\r\n';
    html += '<tr>' +
        '<th>Sun</th>' +
        '<th>Mon</th>' +
        '<th>Tue</th>' +
        '<th>Wed</th>' +
        '<th>Thu</th>' +
        '<th>Fri</th>' +
        '<th>Sat</th>' +
        '</tr>\r\n';

    let prevMonthDays = lastMonthDays(Number(month), Number(year));
    let curMonthDays = lastMonthDays(Number(month) + 1, Number(year));

    let curMonthFirst = new Date(year, month - 1, 1);
    let curMonthLast = new Date(year, month - 1, curMonthDays);

    let curMonthStart = curMonthFirst.getDay();
    let curMonthEnd = curMonthLast.getDay();

    let prevMonthStart = prevMonthDays - curMonthStart + 1;
    let nextMonthPrint = 6 - curMonthEnd;

    let curDay = 1;
    let nextDay = 1;

    // 0 - Sun, 1 - Mon, 2 - Tue, 3 - Wed, 4 - Thur, 5 - Fri, 6 - Sat
    if (curMonthStart !== 0) {
        html += '<tr>';

        for (let i = 1; i <= 7; i++) {
            if (prevMonthStart <= prevMonthDays) {
                html += `<td class="prev-month">${prevMonthStart}</td>`;
                prevMonthStart++;
            } else {
                if (curDay === Number(day)) {
                    html += `<td class="today">${curDay}</td>`;
                    curDay++;
                } else {
                    html += `<td>${curDay}</td>`;
                    curDay++;
                }
            }
        }

        html += '</tr>\r\n';
    } else {
        html += '<tr>';

        for (let i = 1; i <= 7; i++) {
            if (curDay === Number(day)) {
                html += `<td class="today">${curDay}</td>`;
                curDay++;
            } else {
                html += `<td>${curDay}</td>`;
                curDay++;
            }
        }

        html += '</tr>\r\n';
    }

    while (curDay <= curMonthDays || nextDay < nextMonthPrint) {
        html += '<tr>';

        for (let i = 1; i <= 7; i++) {
            if (curDay <= curMonthDays) {
                if (curDay === Number(day)) {
                    html += `<td class="today">${curDay}</td>`;
                    curDay++;
                } else {
                    html += `<td>${curDay}</td>`;
                    curDay++;
                }
            } else {
                html += `<td class="next-month">${nextDay}</td>`;
                nextDay++;
            }
        }

        html += '</tr>\r\n';
    }

    html += '</table>';
    return html;

    function lastMonthDays(month, year) {
        month--;
        if (month === 0) {
            month = 12;
        }

        let thirtyDays = [4, 6, 9, 11];
        let thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
        let isLeapYear = (year % 4 === 0 && year % 100 !== 0)
            || year % 400 === 0;

        if (thirtyDays.includes(month)) {
            return 30;
        } else if (thirtyOneDays.includes(month)) {
            return 31;
        } else {
            if (isLeapYear) {
                return 29;
            } else {
                return 28;
            }
        }
    }
}

// console.log(monthlyCalendar([24, 12, 2012]));
// console.log(monthlyCalendar([4, 9, 2016]));