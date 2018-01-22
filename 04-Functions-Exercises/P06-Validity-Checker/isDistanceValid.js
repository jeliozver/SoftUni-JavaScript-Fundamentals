function isDistanceValid(args) {
    let x1 = args[0];
    let y1 = args[1];
    let x2 = args[2];
    let y2 = args[3];

    let distOne = distanceBetweenPoints(x1, y1, 0, 0);
    let distTwo = distanceBetweenPoints(x2, y2, 0, 0);
    let distThree = distanceBetweenPoints(x1, y1, x2, y2);

    console.log(validateDistance(distOne, [x1, y1, 0, 0]));
    console.log(validateDistance(distTwo, [x2, y2, 0, 0]));
    console.log(validateDistance(distThree, [x1, y1, x2, y2]));

    function distanceBetweenPoints(x1, y1, x2, y2) {
        let pointOne = {x: x1, y: y1};
        let pointTwo = {x: x2, y: y2};

        let distanceX = Math.pow(pointOne.x - pointTwo.x, 2);
        let distanceY = Math.pow(pointOne.y - pointTwo.y, 2);

        return  Math.sqrt(distanceX + distanceY);
    }

    function validateDistance(distance, p) {
        if (Number.isInteger(distance)) {
            return `{${p[0]}, ${p[1]}} to {${p[2]}, ${p[3]}} is valid`;
        } else {
            return `{${p[0]}, ${p[1]}} to {${p[2]}, ${p[3]}} is invalid`;
        }
    }
}

// isDistanceValid([3, 0, 0, 4]);
// isDistanceValid([2, 1, 1, 1]);