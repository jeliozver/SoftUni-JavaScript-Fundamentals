function solve(data, battles) {
    let kingdoms = {};
    for (let kingdom of data) {
        if (!kingdoms.hasOwnProperty(kingdom.kingdom)) {
            kingdoms[kingdom.kingdom] = {
                generals: [],
                wins: 0,
                losses: 0,
            };
        }

        let containsGeneral = false;
        for (let general of kingdoms[kingdom.kingdom].generals) {
            if (general.general === kingdom.general) {
                general.army += kingdom.army;
                containsGeneral = true;
                break;
            }
        }

        if (containsGeneral === false) {
            kingdoms[kingdom.kingdom].generals.push({
                general: kingdom.general,
                army: kingdom.army,
                wins: 0,
                losses: 0,
            });
        }
    }

    for (let battle of battles) {
        let attK = battle[0];
        let attG = battle[1];
        let defK = battle[2];
        let defG = battle[3];

        if (attK !== defK) {
            let attack = kingdoms[attK];
            let deffend = kingdoms[defK];
            let atgen;
            let defgen;

            for (let gen of attack.generals) {
                if (gen.general === attG) {
                    atgen = gen;
                    break;
                }
            }

            for (let gen of deffend.generals) {
                if (gen.general === defG) {
                    defgen = gen;
                    break;
                }
            }

            if (atgen.army > defgen.army) {
                atgen.wins += 1;
                defgen.losses += 1;
                atgen.army = Math.floor(atgen.army + (atgen.army * 0.10));
                defgen.army = Math.floor(defgen.army - (defgen.army * 0.10));
                kingdoms[attK].wins += 1;
                kingdoms[defK].losses += 1;
            } else if (atgen.army < defgen.army) {
                atgen.losses += 1;
                defgen.wins += 1;
                atgen.army = Math.floor(atgen.army - (atgen.army * 0.10));
                defgen.army = Math.floor(defgen.army + (defgen.army * 0.10));
                kingdoms[defK].wins += 1;
                kingdoms[attK].losses += 1;
            }

            for (let gen of attack.generals) {
                if (gen.general === attG) {
                    gen = atgen;
                    break;
                }
            }

            for (let gen of deffend.generals) {
                if (gen.general === defG) {
                    gen = defgen;
                    break;
                }
            }
        }
    }

    let sorted = Object.entries(kingdoms);
    sorted = sortResults(sorted);
    let winner = sorted[0];
    console.log(`Winner: ${winner[0]}`);
    let generals = sorted[0][1].generals;
    generals = generals.sort((a,b) => b.army - a.army);
    for (let general of generals) {
        console.log(`/\\general: ${general.general}`);
        console.log(`---army: ${general.army}`);
        console.log(`---wins: ${general.wins}`);
        console.log(`---losses: ${general.losses}`);
    }

    function sortResults(arr) {
        arr.sort(function (a, b) {
            if (a[1].wins !== b[1].wins) {
                return b[1].wins - a[1].wins;
            } else {
                if (a[1].losses !== b[1].losses) {
                    return a[1].losses - b[1].losses;

                } else {
                    return a[0].localeCompare(b[0]);
                }
            }
        });

        return arr;
    }
} 