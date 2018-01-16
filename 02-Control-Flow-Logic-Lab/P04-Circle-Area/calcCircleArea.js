function calcCircleArea(radius) {
    let area = Math.PI * radius * radius;
    let areaRounded = Math.round(area * 100) / 100;

    console.log(area);
    console.log(areaRounded);
}

// calcCircleArea(5);