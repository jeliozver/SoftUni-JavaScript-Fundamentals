function kitodarMiner(input) {
    let regex = /mine\s*.*\s*-\s*(gold|silver|diamonds)\s*:\s*(\d+)/i;
    let silver = 0;
    let gold = 0;
    let diamonds = 0;
    for( let line of input) {
       line = line.trim();
       let match = regex.exec(line);
       if (match) {
           let ore = match[1].toLowerCase();
           let amount = Number(match[2]);
           if (ore === 'silver') {
               silver += amount;
           } else if (ore === 'gold') {
               gold += amount;
           } else {
               diamonds += amount;
           }
       }
    }

    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamonds}`);
}

// kitodarMiner([
//     'mine bobovdol - gold: 10',
//     'mine - diamonds: 5',
//     'mine colas - wood: 10',
//     'mine myMine - silver:  14',
//     'mine silver:14 - silver: 14',
// ]);

