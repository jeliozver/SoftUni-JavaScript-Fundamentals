function boxesAndBottles(bottles, boxCapacity) {
    let boxesCount = 0;

    while (bottles > 0) {
        bottles -= boxCapacity;
        boxesCount++;
    }

    console.log(boxesCount);
}

// boxesAndBottles(5, 10);