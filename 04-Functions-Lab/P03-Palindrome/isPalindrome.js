function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }

    return true;
}

// console.log(isPalindrome('haha'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('unitinu'));