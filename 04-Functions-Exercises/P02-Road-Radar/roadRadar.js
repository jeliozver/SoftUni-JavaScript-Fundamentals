function roadRadar(args) {
    let speed = args[0];
    let area = args[1].toLowerCase();

    let limit = getLimit(area);
    let infraction = getInfraction(speed, limit);

    if (infraction) {
        console.log(infraction);
    }

    function getLimit(area) {
        let areaLimits = {
            'motorway': 130,
            'interstate': 90,
            'city': 50,
            'residential': 20,
        };

        return areaLimits[area];
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
            return getInfractionSeverity(overSpeed);
        }
    }

    function getInfractionSeverity(overSpeed) {
        if (overSpeed > 40) {
            return 'reckless driving';
        } else if (overSpeed <= 20) {
            return 'speeding';
        } else {
            return 'excessive speeding';
        }
    }
}

// roadRadar([40, 'city']);
// roadRadar([21, 'residential']);
// roadRadar([120, 'interstate']);
// roadRadar([200, 'motorway']);