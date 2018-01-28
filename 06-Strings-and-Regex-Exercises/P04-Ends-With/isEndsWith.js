function isEndsWith(str, end) {
    let strRev = reverseString(str);
    let endRev = reverseString(end);

    return isStartWith(strRev, endRev);

    function reverseString(str) {
        return str
            .split('')
            .reverse()
            .join('');
    }

    function isStartWith(str, start) {
        return str.indexOf(start) === 0;
    }
}

// console.log(isEndsWith('This sentence ends with fun?', 'fun?'));
// console.log(isEndsWith('This is Houston, we have…', 'We have…'));
// console.log(isEndsWith('The new iPhone has no headphones jack.', 'o headphones jack.'));