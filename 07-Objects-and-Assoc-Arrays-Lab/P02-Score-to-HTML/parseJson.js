function parseJson(jsonStr) {
    let scoreSheet = JSON.parse(jsonStr);
    let tableHeaders = Object.keys(scoreSheet[0]);
    let html = '<table>\r\n<tr>';
    for (let header of tableHeaders) {
        html += `<th>${htmlEscape(header)}</th>`;
    }
    html += '</tr>\r\n';
    for (let element of scoreSheet) {
        html += '<tr>';
           for (let value in element) {
               let test = Number(element[value]);
               if (isNaN(test)) {
                   html += `<td>${htmlEscape(element[value])}</td>`
               } else {
                   html += `<td>${test}</td>`
               }

           }
        html += '</tr>\r\n';
    }

    return html + '</table>';

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/["&'<>]/g, ch => map[ch]);
    }
}

// console.log(parseJson(
//     '[{"name":"Pesho","score":479},' +
//     '{"name":"Gosho","score":205}]'
// ));
//
// console.log(parseJson(
//     '[{"name":"Pesho & Kiro","score":479},' +
//     '{"name":"Gosho, Maria & Viki","score":205}]'
// ));