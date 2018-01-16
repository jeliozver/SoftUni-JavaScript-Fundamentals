function distanceBetweenPoints(x1, y1, x2, y2) {
    let pointOne = {x: x1, y: y1};
    let pointTwo = {x: x2, y: y2};

    let distanceX = Math.pow(pointOne.x - pointTwo.x, 2);
    let distanceY = Math.pow(pointOne.y - pointTwo.y, 2);
    let distance = Math.sqrt(distanceX + distanceY);

    console.log(distance);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);