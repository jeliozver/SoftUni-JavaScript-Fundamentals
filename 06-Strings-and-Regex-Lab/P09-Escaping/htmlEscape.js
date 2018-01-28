function htmlEscape(input) {
    let html = '<ul>\r\n';
    for (let i = 0; i < input.length; i++) {
        html += '<li>';
        let current = input[i];
        let less = /</g;
        let more = />/g;
        let and = /&/g;
        let quot = /"/g;

        current =  current.replace(and, '&amp;');
        current = current.replace(less, '&lt;');
        current =  current.replace(more, '&gt;');
        current =  current.replace(quot, '&quot;');

        html += current;
        html += '</li>\r\n';
    }
    return html + '</ul>';
}

// console.log(htmlEscape([
//     '<b>unescaped text</b>', 'normal text'
// ]));