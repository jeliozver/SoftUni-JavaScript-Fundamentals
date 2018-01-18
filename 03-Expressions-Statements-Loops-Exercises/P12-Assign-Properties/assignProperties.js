function assignProperties(args) {
    let prop1 = args[0];
    let val1 = args[1];
    let prop2 = args[2];
    let val2 = args[3];
    let prop3 = args[4];
    let val3 = args[5];

    console.log({
        [prop1]: val1,
        [prop2]: val2,
        [prop3]: val3
    });
}

// assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
// assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);