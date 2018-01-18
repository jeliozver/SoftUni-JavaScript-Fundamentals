function distanceOverTime(args) {
    let dist1 = args[0] *  (args[2] / 3600);
    let dist2 = args[1] *  (args[2] / 3600);

    let delta = Math.abs(dist1 - dist2) * 1000;

    console.log(delta);
}

// distanceOverTime([0, 60, 3600]);
// distanceOverTime([5, -5, 40]);