function treasureLocator(args) {
    for (let i = 0; i < args.length; i += 2) {
        let x = args[i];
        let y = args[i + 1];

        console.log(locateTreasure(x, y));
    }

    function locateTreasure(x, y) {
       let tuvaluLoc = [x, y, 1, 3, 1, 3];
       let tokelauLoc = [x, y, 8, 9, 0, 1];
       let tongaLoc = [x, y, 0, 2, 6, 8];
       let samoaLoc = [x, y, 5, 7, 3, 6];
       let cookLoc = [x, y, 4, 9, 7, 8];

       if (getPointLocation(tuvaluLoc)) {
           return 'Tuvalu';
       } else if (getPointLocation(tokelauLoc)) {
           return 'Tokelau';
       } else if (getPointLocation(tongaLoc)) {
           return 'Tonga';
       } else if (getPointLocation(samoaLoc)) {
           return 'Samoa';
       } else if (getPointLocation(cookLoc)) {
           return 'Cook';
       }

       return 'On the bottom of the ocean';
    }

    function getPointLocation(args) {
        let [x, y, xMin, xMax, yMin, yMax] = args;
        return x >= xMin && x <= xMax && y >= yMin && y <= yMax;
    }
}

// treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
// treasureLocator([6, 4]);