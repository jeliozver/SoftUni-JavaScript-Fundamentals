function orderDatabase(input) {
    let systemsDb = new Map();
    for (let line of input) {
        let [name, component, subComponent] = line.split(' | ');

        if (!systemsDb.has(name)) {
            systemsDb.set(name, new Map())
        }
        if (!systemsDb.get(name).has(component)) {
            systemsDb.get(name)
                .set(component, [])
        }

        systemsDb.get(name)
            .get(component)
            .push(subComponent);
    }

    let systems = [...systemsDb];
    systems = sortSystems(systems);

    for (let [system, values] of systems) {
        console.log(system);
        let components = [...values];
        components = sortComponents(components);
        for (let [component, subComponents] of components) {
            console.log(`|||${component}`);
            for (let subComponent of subComponents) {
                console.log(`||||||${subComponent}`);
            }
        }
    }

    function sortSystems(arr) {
        arr.sort(function (a, b) {
            return [...a[1]].length !== [...b[1]].length
                ? [...b[1]].length - [...a[1]].length
                : b[0].toLowerCase() < a[0].toLowerCase()
        });

        return arr;
    }

    function sortComponents(arr) {
        arr.sort(function (a, b) {
            return [...b[1]].length - [...a[1]].length
        });

        return arr;
    }
}

orderDatabase([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'lambda | CoreB | B24',
    'lambda | CoreA | A24',
    'lambda | CoreA | A25',
    'lambda | CoreC | C4',
    'lndice | Session | Default Storage',
    'lndice | Session | Default Security',
]);