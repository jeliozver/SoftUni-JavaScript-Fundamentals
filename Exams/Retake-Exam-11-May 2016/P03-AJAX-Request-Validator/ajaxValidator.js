function ajaxValidator(input) {
    input.pop();
    let hash = input.pop();
    let methodPattern = /^Method:[ ](GET|POST|PUT|DELETE)$/;
    let credentialsPattern = /^Credentials:[ ](Basic|Bearer)[ ]([A-Za-z0-9]+)$/;
    let contentPattern = /^Content:[ ]([A-Za-z0-9.]+)$/;
    let hashPattern = /[0-9][A-Za-z]/g;

    while (input.length > 0) {
        let methodInput = input.shift();
        let credentialsInput = input.shift();
        let contentInput = input.shift();

        let isMethodValid = methodInput.match(methodPattern);
        let isCredentialsValid = credentialsInput.match(credentialsPattern);
        let isContentValid = contentInput.match(contentPattern);

        if (isMethodValid && isCredentialsValid && isContentValid) {
            let method = isMethodValid[1];
            let authType = isCredentialsValid[1];
            let authToken = isCredentialsValid[2];

            if (method !== 'GET' && authType === 'Basic') {
                console.log(`Response-Method:${method}&Code:401`);
                continue;
            }

            if (isAuthTokenValid(authToken, hash, hashPattern)) {
                console.log(`Response-Method:${method}&Code:200&Header:${authToken}`);
            } else {
                console.log(`Response-Method:${method}&Code:403`);
            }
        } else {
            console.log('Response-Code:400');
        }
    }

    function isAuthTokenValid(authToken, hash, hashPattern) {
        let matches = hash.match(hashPattern);
        for (let match of matches) {
           let digit = Number(match[0]);
           let letter = match[1];
           let count = countOccurrences(letter, authToken);
           if (count === digit) {
               return true;
           }
        }

        return false;
    }

    function countOccurrences(targetStr, text) {
        let count = 0;
        let index = 0;

        while (true) {
            let found = text.indexOf(targetStr, index);

            if (found >= 0) {
                count++;
                index = found + 1;
            } else {
                return count;
            }
        }
    }
}

// ajaxValidator([
//     'Method: GET',
//     'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
//     'Content: users.asd.1782452.278asd',
//     'Method: POST',
//     'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
//     'Content: Johnathan',
//     '2q3d',
//     '',
// ]);

// ajaxValidator([
//     'Method: PUT',
//     'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
//     'Content: users.asd/1782452$278///**asd123',
//     'Method: POST',
//     'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
//     'Content: Johnathan',
//     'Method: DELETE',
//     'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
//     'Content: This.is.a.sample.content',
//     '2e5g',
//     '',
// ]);