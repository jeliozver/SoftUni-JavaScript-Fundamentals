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

    // TODO prev month row

    // TODO mid month rows

    // TODO next month row

    html += '</table>';
    return html;
}

console.log(monthlyCalendar([24, 12, 2012]));
//console.log(monthlyCalendar([4, 9, 2016]));