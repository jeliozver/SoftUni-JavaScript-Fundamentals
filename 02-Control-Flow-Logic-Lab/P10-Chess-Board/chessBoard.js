function chessBoard(n) {
    let result = '<div class="chessboard">\r\n';
    
    for (let row = 0; row < n; row++) {
        result += '<div>\r\n';
        let color = (row % 2 === 0) ? 'black' : 'white';

        for (let col = 0; col < n; col++) {
            result += `<span class="${color}"></span>\r\n`;
            color = (color === 'white') ? 'black' : 'white';
        }

        result += '</div>\r\n';
    }

    return result + '</div>';
}

// console.log(chessBoard(3));