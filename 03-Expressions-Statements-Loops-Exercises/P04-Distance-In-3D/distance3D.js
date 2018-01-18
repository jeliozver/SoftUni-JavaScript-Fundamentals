function distance3D(args) {
    let x0 = args[0];
    let y0 = args[1];
    let z0 = args[2];

    let x1 = args[3];
    let y1 = args[4];
    let z1 = args[5];

    let distance = Math.sqrt(Math.pow((x1 - x0), 2)
        + Math.pow((y1 - y0), 2)
        + Math.pow((z1 - z0), 2));

    console.log(distance);
}

// distance3D([1, 1, 0, 5, 4, 0]);
// distance3D([3.5, 0, 1, 0, 2, -1]);