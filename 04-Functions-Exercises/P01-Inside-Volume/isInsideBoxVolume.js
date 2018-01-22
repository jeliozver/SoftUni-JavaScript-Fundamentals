function isInsideBoxVolume(args) {
    for (let i = 0; i < args.length; i+= 3) {
        let x = args[i];
        let y = args[i + 1];
        let z = args[i + 2];

        let vol = {
            x1: 10,
            x2: 50,
            y1: 20,
            y2: 80,
            z1: 15,
            z2: 50,
        };

        if (inVolume(x, y, z, vol)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function inVolume(x, y, z, vol) {
        if (x >= vol.x1 && x <= vol.x2) {
            if (y >= vol.y1 && y <= vol.y2) {
                if (z >= vol.z1 && z <= vol.z2) {
                    return true;
                }
            }
        }

        return false;
    }
}

// isInsideBoxVolume([
//     13.1, 50, 31.5,
//     50, 80, 50,
//     -5, 18, 43
// ]);
// isInsideBoxVolume([8, 20, 22]);