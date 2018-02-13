function gameOfEpicness(data, battles) {
    let kingdoms = {};
    for (let kingdom of data) {
        if (!kingdoms.hasOwnProperty(kingdom.kingdom)) {
            kingdoms[kingdom.kingdom] = {
                kingdomWins: 0,
                kingdomLosses: 0,
            };
        }

        if (!kingdoms[kingdom.kingdom].hasOwnProperty(kingdom.general)) {
            kingdoms[kingdom.kingdom][kingdom.general] = {
                army: 0,
                wins: 0,
                losses: 0,
            };
        }

        kingdoms[kingdom.kingdom][kingdom.general].army += kingdom.army;
    }

    for (let battle of battles) {
        let attK = battle[0];
        let attG = battle[1];
        let defK = battle[2];
        let defG = battle[3];

        if (attK !== defK) {
            if (kingdoms[attK][attG].army > kingdoms[defK][defG].army) {
                kingdoms[attK][attG].wins += 1;
                kingdoms[defK][defG].losses += 1;

                kingdoms[attK][attG].army = Math.floor
                (kingdoms[attK][attG].army + (kingdoms[attK][attG].army * 0.10));
                kingdoms[defK][defG].army = Math.floor
                (kingdoms[defK][defG].army - (kingdoms[defK][defG].army * 0.10));

                kingdoms[attK].kingdomWins += 1;
                kingdoms[defK].kingdomLosses += 1;

            } else if (kingdoms[attK][attG].army < kingdoms[defK][defG].army) {
                kingdoms[defK][defG].wins += 1;
                kingdoms[attK][attG].losses += 1;

                kingdoms[attK][attG].army = Math.floor
                (kingdoms[attK][attG].army - (kingdoms[attK][attG].army * 0.10));
                kingdoms[defK][defG].army = Math.floor
                (kingdoms[defK][defG].army + (kingdoms[defK][defG].army * 0.10));

                kingdoms[defK].kingdomWins += 1;
                kingdoms[attK].kingdomLosses += 1;
            }
        }
    }

    let sorted = Object.entries(kingdoms);
    sorted = sortResults(sorted);
    let winner = sorted[0];
    console.log(`Winner: ${winner[0]}`);
    let generals = winner[1];
    delete generals['kingdomWins'];
    delete generals['kingdomLosses'];
    generals = Object.entries(generals);
    generals = generals.sort((a,b) => b[1].army - a[1].army);
    
    for (let general of generals) {
        console.log(`/\\general: ${general[0]}`);
        console.log(`---army: ${general[1].army}`);
        console.log(`---wins: ${general[1].wins}`);
        console.log(`---losses: ${general[1].losses}`);
    }

    function sortResults(arr) {
        arr.sort(function (a, b) {
            if (a[1].kingdomWins !== b[1].kingdomWins) {
                return b[1].kingdomWins - a[1].kingdomWins;
            } else {
                if (a[1].kingdomLosses !== b[1].kingdomLosses) {
                    return a[1].kingdomLosses - b[1].kingdomLosses;
                } else {
                    return a[0] > b[0];
                }
            }
        });

        return arr;
    }
}