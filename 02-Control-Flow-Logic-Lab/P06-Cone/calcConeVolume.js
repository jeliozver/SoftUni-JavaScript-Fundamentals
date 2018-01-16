function calcConeVolume(r, h) {
    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h,2));
    let volume = Math.PI * Math.pow(r, 2) * h / 3;
    let b = Math.PI * Math.pow(r, 2);
    let l = Math.PI * r * s;
    let area = b + l;

    console.log("volume = " + volume);
    console.log("area = " + area);
}

// calcConeVolume(3, 5);