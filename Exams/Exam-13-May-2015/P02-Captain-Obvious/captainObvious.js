function captainObvious(input) {
    let wordsText = input.shift();
    let wordsMatches = wordsText.match(/\w+/g);
    let wordsReps = {};

    for (let word of wordsMatches) {
        word = word.toLowerCase();
        if (!wordsReps.hasOwnProperty(word)) {
            wordsReps[word] = 0;
        }

        wordsReps[word]++;
    }

    let sorted = Object.entries(wordsReps)
        .sort((a, b) => b[1] - a[1]);
    let words = [];

    for (let word of sorted) {
        if (word[1] >= 3) {
            words.push(word[0]);
        } else {
            break;
        }
    }

    if (words.length === 0) {
        console.log('No words');
        return;
    }

    let targetText = input.shift();
    let regex = /\b((?!=|\.|\!|\?).)+(.)\b[.?!]/g;
    let sentences = targetText.match(regex);
    let extracted = [];
    for (let sentence of sentences) {
        let contained = 0;
        for (let word of words) {
            let wordSearch = new RegExp('\\b'+word+'\\b', 'gi');
            let matches = sentence.match(wordSearch);
            if (matches) {
                contained++;
            }
        }

        if (contained >= 2) {
            extracted.push(sentence);
        }
    }

    if(extracted.length === 0) {
        console.log('No sentences');
    } else {
        console.log(extracted.join('\n'));
    }
}

// captainObvious([
//     "Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious!" +
//     " He replied: Thank you CAPTAIN OBVIOUS you are the man!",
//     "The captain was walking and he was obvious. " +
//     "He did not know what was going to happen to you in the future. Was he curious? We do not know."
// ]);

// captainObvious([
//     "Why, why is he so crazy, so so crazy? Why?",
//     "There are no words that you should be matching. You should be careful."
// ]);