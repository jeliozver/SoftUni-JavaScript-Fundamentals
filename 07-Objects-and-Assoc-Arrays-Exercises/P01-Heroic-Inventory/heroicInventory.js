function heroicInventory(input) {
    let data = [];

    for (let line of input) {
       let args = line
           .split(' / ')
           .filter(e => e !== '');

       let name = args[0];
       let level = Number(args[1]);
       let items = [];
       if (args.length > 2) {
           items = args[2]
               .split(', ')
               .filter(e => e !== '');
       }

       let hero = {
           name: name,
           level: level,
           items: items,
       };

       data.push(hero);
    }

    return JSON.stringify(data);
}

// console.log(heroicInventory([
//     'Isacc / 25 / Apple, Gravity Gun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara',
// ]));

// console.log(heroicInventory([
//     'Jake / 1000 / Gauss, HolidayGrenade',
// ]));