function filterByAge(filterAge, nameA, ageA, nameB, ageB) {
    let personA = {name:nameA, age:ageA};
    let personB = {name:nameB, age:ageB};

    if (personA.age >= filterAge) {
        console.log(personA);
    }

    if (personB.age >= filterAge) {
        console.log(personB);
    }
}

// filterByAge(12, 'Ivan', 15, 'Asen', 9);