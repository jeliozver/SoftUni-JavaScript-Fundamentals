function angularParser(input) {
    input.pop();
    let modulesDb = new Map();
    let storage = {};

    let modulePattern = /\$app='(.+)'/;
    let controllerPattern = /\$controller='(.+)'&app='(.+)'/;
    let modelPattern = /\$model='(.+)'&app='(.+)'/;
    let viewPattern = /\$view='(.+)'&app='(.+)'/;
    let namePattern = /'&app='(.+)'/;

    for (let line of input) {
        let isModule = line.match(modulePattern);
        if (isModule) {
            if (storage.hasOwnProperty(isModule[1])) {
                let values = storage[isModule[1]];
                modulesDb.set(isModule[1], values);
            } else {
                modulesDb.set(isModule[1], {
                    controllers: [],
                    models: [],
                    views: [],
                });
            }
        } else {
            let isController = line.match(controllerPattern);
            let isModel = line.match(modelPattern);
            let isView = line.match(viewPattern);
            let moduleName = line.match(namePattern);

            if (modulesDb.has(moduleName[1])) {
                let values = modulesDb.get(moduleName[1]);

                if (isController) {
                    values.controllers.push(isController[1]);
                } else if (isModel) {
                    values.models.push(isModel[1]);
                } else if (isView) {
                    values.views.push(isView[1]);
                }

                modulesDb.set(moduleName[1], values);
            } else {
                if (!storage.hasOwnProperty(moduleName[1])) {
                    storage[moduleName[1]] = {
                        controllers: [],
                        models: [],
                        views: [],
                    }
                }

                if (isController) {
                    storage[moduleName[1]].controllers.push(isController[1]);
                } else if (isModel) {
                    storage[moduleName[1]].models.push(isModel[1]);
                } else if (isView) {
                    storage[moduleName[1]].views.push(isView[1]);
                }
            }
        }
    }

    let sorted = [...modulesDb];
    sorted = sortModules(sorted);
    let result = new Map();
    for (let module of sorted) {
        module[1].controllers = sortContent(module[1].controllers);
        module[1].models = sortContent(module[1].models);
        module[1].views = sortContent(module[1].views);

       result.set(module[0], module[1]);
    }

    let resultToObj = mapToObj(result);
    console.log(JSON.stringify(resultToObj));

    function sortModules(arr) {
        arr.sort(function (a, b) {
            return a[1].controllers.length !== b[1].controllers.length
                ? b[1].controllers.length - a[1].controllers.length
                : a[1].models.length - b[1].models.length
        });

        return arr;
    }

    function sortContent(arr) {
        arr.sort(function (a, b) {
            return a.localeCompare(b);
        });

        return arr;
    }

    function mapToObj(map) {
        return Array.from(map).reduce((obj, [key, value]) => (
            Object.assign(obj, {[key]: value})
        ), {});
    }
}

angularParser([
    `$controller='PHPController'&app='Language Parser'`,
    `$controller='JavaController'&app='Language Parser'`,
    `$controller='C#Controller'&app='Language Parser'`,
    `$controller='C++Controller'&app='Language Parser'`,
    `$app='Garbage Collector'`,
    `$controller='GarbageController'&app='Garbage Collector'`,
    `$controller='SpamController'&app='Garbage Collector'`,
    `$app='Language Parser'`,
    ``,
]);