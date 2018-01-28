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

console.log(countOccurrences('the', 'The quick brown fox jumps over the lay dog.'));
console.log(countOccurrences('ma', 'Marine mammal training is the training and ' +
    'caring for marine life such as, dolphins, killer whales, sea lions, ' +
    'walruses, and other marine mammals. It is also a duty of the trainer to do ' +
    'mental and physical exercises to keep the animal healthy and happy.'));