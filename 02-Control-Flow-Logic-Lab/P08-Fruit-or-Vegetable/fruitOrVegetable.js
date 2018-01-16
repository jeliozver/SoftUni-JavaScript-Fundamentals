function fruitOrVegetable(input) {
    let fruits = [ 'banana', 'apple', 'kiwi',
        'cherry', 'lemon', 'grapes', 'peach' ];
    let vegetables = [ 'tomato', 'cucumber',
        'pepper', 'onion', 'garlic', 'parsley' ];

    if (fruits.includes(input)) {
        console.log('fruit');
    } else if (vegetables.includes(input)) {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

// fruitOrVegetable('banana');
// fruitOrVegetable('cucumber');
// fruitOrVegetable('shkembe');