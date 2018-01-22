function tripLength(args) {
    let [x1, y1, x2, y2, x3, y3] = args;

    let p1 = {x: x1, y: y1};
    let p2 = {x: x2, y: y2};
    let p3 = {x: x3, y: y3};

    let distances = {
        '1->2->3:': getDistance(p1, p2) + getDistance(p2, p3),
        '1->3->2:': getDistance(p1, p3) + getDistance(p3, p2),
        '2->1->3:': getDistance(p2, p1) + getDistance(p1, p3),
        '2->3->1:': getDistance(p2, p3) + getDistance(p3, p1),
        '3->1->2:': getDistance(p3, p1) + getDistance(p1, p2),
        '3->2->1:': getDistance(p3, p2) + getDistance(p2, p1),
    };

    let min = Number.MAX_VALUE;
    let result = '';

    for (let key in distances) {
        if (distances[key] < min) {
            min = distances[key];
            result = key + ' ' + min;
        }
    }

    return result;

    function getDistance(p1, p2) {
        let distanceX = Math.pow(p1.x - p2.x, 2);
        let distanceY = Math.pow(p1.y - p2.y, 2);
        return Math.sqrt(distanceX + distanceY);
    }
}

// console.log(tripLength([0, 0, 2, 0, 4, 0]));
// console.log(tripLength([5, 1, 1, 1, 5, 4]));
// console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));