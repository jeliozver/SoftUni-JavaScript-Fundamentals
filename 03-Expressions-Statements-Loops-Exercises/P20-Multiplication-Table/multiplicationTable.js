function multiplicationTable(n) {
    console.log('<table border="1">');
    let html = '<tr><th>x</th>';

    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }

    html += '</tr>';
    console.log(html);

    for (let i = 1; i <= n; i++) {
        html = `<tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++) {
            html += `<td>${i * j}</td>`;
        }

        html += '</tr>';
        console.log(html);
    }

    console.log('</table>');
}

// multiplicationTable(5);
// multiplicationTable(8);
// document.body.innerHTML = multiplicationTable(5);