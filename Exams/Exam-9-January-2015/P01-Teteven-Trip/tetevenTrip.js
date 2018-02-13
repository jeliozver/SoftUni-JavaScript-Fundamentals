function tetevenTrip(input) {
    input = input.filter(e => e !== '');
    for (let line of input) {
        let [carModel, fuelType, route, luggage] = line.split(' ');
        luggage = Number(luggage);
        let fuelNeeded = 0;
        let c = 1;
        if (fuelType === 'gas') c = 1.2;
        else if (fuelType === 'diesel') c = 0.8;
        let baseCons = (c * 10) + (luggage * 0.01);
        
        if (route === '1') {
            let routeTotal = 110 * (baseCons / 100);
            let snowCons = 0.3 * baseCons;
            snowCons = 10 * (snowCons / 100);
            fuelNeeded = routeTotal + snowCons;
        } else {
            let routeTotal = 95 * (baseCons / 100);
            let snowCons = 0.3 * baseCons;
            snowCons = 30 * (snowCons / 100);
            fuelNeeded = routeTotal + snowCons;
        }

        console.log(`${carModel} ${fuelType} ${route} ${Math.round(fuelNeeded)}`);
    }
}