function pyramidOfDjoser(base, increment) {
    let step = 0;
    let totalSteps = Math.ceil(base / 2);
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;

    for (let i = base; i >= 2 || i >= 1; i-= 2) {
        step++;
        if (step === totalSteps) {
            totalGold += getCurrentGold(i, increment);
        } else if (step % 5 !== 0) {
            totalStone += getCurrentStone(i, increment);
            totalMarble += getCurrentOuterLayer(i, increment);
        } else {
            totalStone += getCurrentStone(i, increment);
            totalLapis += getCurrentOuterLayer(i, increment);
        }
    }

    let totalHeight = Math.floor(totalSteps * increment);
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${totalHeight}`);

    function getCurrentGold(size, increment) {
        return (size * size ) * increment;
    }

    function getCurrentStone(size, increment) {
        size -= 2;
        return (size * size) * increment;
    }

    function getCurrentOuterLayer(size, increment) {
        let perimeter = size * 4;
        return (perimeter - 4) * increment;
    }
}

// pyramidOfDjoser(11, 1);
// pyramidOfDjoser(11, 0.75);
// pyramidOfDjoser(12, 1);
// pyramidOfDjoser(23, 0.5);