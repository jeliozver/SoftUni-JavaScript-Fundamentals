function radioCrystals(args) {
    let desired = args[0];

    for (let i = 1; i < args.length; i++) {
        let current = args[i];
        console.log(`Processing chunk ${current} microns`);
        
        current = goCutting(current, desired);
        if (isDesiredReached(current, desired)) continue;

        current = goLapping(current, desired);
        if (isDesiredReached(current, desired)) continue;

        current = goGrinding(current, desired);
        if (isDesiredReached(current, desired)) continue;

        current = goEtching(current, desired);
        isDesiredReached(current, desired);
    }

    function goCutting(chunk, desired) {
        let counter = 0;
        while (chunk / 4 >= desired) {
            chunk /= 4;
            counter++;
        }

        if (counter !== 0) {
            console.log(`Cut x${counter}`);
            chunk = transportAndWash(chunk);
        }

        return chunk;
    }

    function goLapping(chunk, desired) {
        let counter = 0;
        while (chunk - (chunk * 0.20) >= desired) {
            chunk -= chunk * 0.20;
            counter++;
        }

        if (counter !== 0) {
            console.log(`Lap x${counter}`);
            chunk = transportAndWash(chunk);
        }

        return chunk;
    }

    function goGrinding(chunk, desired) {
        let counter = 0;
        while (chunk - 20 >= desired) {
            chunk -= 20;
            counter++;
        }

        if (counter !== 0) {
            console.log(`Grind x${counter}`);
            chunk = transportAndWash(chunk);
        }
        return chunk;
    }

    function goEtching(chunk, desired) {
        let counter = 0;
        while (chunk - 2 >= desired || chunk - 1 === desired) {
            chunk -= 2;
            counter++;
        }

        if (counter !== 0) {
            console.log(`Etch x${counter}`);
            chunk = transportAndWash(chunk);
        }

        return chunk;
    }

    function transportAndWash(chunk) {
        console.log('Transporting and washing');
        return Math.floor(chunk);
    }

    function isDesiredReached(current, desired) {
        if (current === desired) {
            console.log(`Finished crystal ${desired} microns`);
            return true;
        } else if (current + 1 === desired) {
            console.log('X-ray x1');
            console.log(`Finished crystal ${desired} microns`);
            return true;
        }

        return false;
    }
}

// radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);
