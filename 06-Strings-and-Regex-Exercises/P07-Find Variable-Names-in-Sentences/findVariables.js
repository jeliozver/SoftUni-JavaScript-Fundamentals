function findVariables(text) {
    let regex = /\b_{1}([A-Za-z0-9]+)\b/g;
    let result = [];
    let test = regex.exec(text);
    while (test) {
        result.push(test[1]);
        test = regex.exec(text);
    }

   return result.join(',');
}

// console.log(findVariables(
//     'The _id and _age variables are both integers.'
// ));
// console.log(findVariables(
//     'Calculate the _area of the _perfectRectangle object'
// ));
// console.log(findVariables(
//     '__invalidVariable _evenMoreInvalidVariable_ _validVariable'
// ));