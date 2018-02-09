function daggerAndSwords(input) {
    input = input.map(Number);
    let html = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n';
    html += '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n';
    for (let num of input) {
        let length = Math.floor(num);
        if (length <= 10) continue;
        let kind = '';
        if (length > 40) {
            kind = 'sword';
        } else {
            kind = 'dagger';
        }
        let index = length % 5;
        let type = '';
        switch (index) {
            case 0: type = '*rap-poker'; break;
            case 1: type = 'blade'; break;
            case 2: type = 'quite a blade'; break;
            case 3: type = 'pants-scraper'; break;
            case 4: type = 'frog-butcher'; break;
        }

        html += `<tr><td>${length}</td><td>${kind}</td><td>${type}</td></tr>\n`;
    }

    html += '</tbody>\n</table>';
    console.log(html);
}

// daggerAndSwords([
//     '17.8',
//     '19.4',
//     '13',
//     '55.8',
//     '126.96541651',
//     '3'
// ]);