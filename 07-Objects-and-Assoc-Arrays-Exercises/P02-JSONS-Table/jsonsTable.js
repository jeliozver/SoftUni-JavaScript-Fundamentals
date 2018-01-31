function jsonsTable(input) {
    let html = '<table>\r\n';
    for (let line of input) {
        let json = JSON.parse(line);
        let name = htmlEscape(json['name']);
        let position = htmlEscape(json['position']);
        let salary = Number(json['salary']);

        html += '\t<tr>\r\n';
        html += `\t\t<td>${name}</td>\r\n`;
        html += `\t\t<td>${position}</td>\r\n`;
        html += `\t\t<td>${salary}</td>\r\n`;
        html += '\t<tr>\r\n';
    }

    return html + '</table>';

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/["&'<>]/g, ch => map[ch]);
    }
}

console.log(jsonsTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]));