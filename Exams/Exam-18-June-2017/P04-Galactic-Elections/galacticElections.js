function galacticElections(input) {
    let electionsData = new Map();

    for (let ballot of input) {
        let system = ballot.system;
        let candidate = ballot.candidate;
        let votes = ballot.votes;

        // electionsData - Map (key for each system) - value object with properties:
        // candidates: Map (key for each candidate) - value sum of votes for the candidate
        // systemVotes: sum of all votes for the system
        if (!electionsData.has(system)) {
            electionsData.set(system, {
                candidates: new Map(),
                systemVotes: 0,
            });
        }

        if (!electionsData.get(system).candidates.has(candidate)) {
            electionsData.get(system).candidates.set(candidate, 0);
        }

        electionsData.get(system).systemVotes += votes;
        let oldCandidateVotes = electionsData.get(system).candidates.get(candidate);
        electionsData.get(system).candidates.set(candidate, oldCandidateVotes + votes);
    }

    // winnersBySystems - Map (key for each winner) - value object with properties:
    // systemsWon: Map (key for each system won) - value sum of the votes for the system
    // votes: total sum of all votes for the winner
    let systems = [...electionsData];
    let totalVotes = 0;
    let winnersBySystems = new Map();

    for (let system of systems) {
        // Get candidates map and sort it so the candidate with the most votes go on top
        let candidates = [...system[1].candidates];
        let candidatesSorted = sortCandidates(candidates);
        let systemName = system[0];
        let winner = candidatesSorted[0][0];
        let winnerVotes = system[1].systemVotes;
        totalVotes += winnerVotes;

        if (!winnersBySystems.has(winner)) {
            winnersBySystems.set(winner, {
                systemsWon: new Map(),
                votes: 0
            });
        }

        if (!winnersBySystems.get(winner).systemsWon.has(systemName)) {
            winnersBySystems.get(winner).systemsWon.set(systemName, winnerVotes)
        }

        winnersBySystems.get(winner).votes += winnerVotes;
    }

    // Get the winners by systems list:
    // If winner is only one - wins unopposed and program ends
    let winners = [...winnersBySystems];
    if (winners.length === 1) {
        console.log(`${winners[0][0]} wins with ${winners[0][1].votes} votes`);
        console.log(`${winners[0][0]} wins unopposed!`);
        return;
    }

    // If more than one winner sort winners list to get at least two candidates on top
    winners = sortWinners(winners);
    // If the candidate with the most votes haves more than 50% of total he wins
    // Print winner with his votes and runner up with the systems he won and votes for each system sorted
    let votesFirst = winners[0][1].votes;
    let percentageFirst = votesFirst / totalVotes * 100;
    if (percentageFirst > 50) {
        console.log(`${winners[0][0]} wins with ${votesFirst} votes`);
        console.log(`Runner up: ${winners[1][0]}`);
        let runnerUpSystems = [...winners[1][1].systemsWon];
        runnerUpSystems = sortCandidates(runnerUpSystems);
        for (let sys of runnerUpSystems) {
            console.log(`${sys[0]}: ${sys[1]}`);
        }
    } else {
        // If the candidate with the most vote doesn't have more than 50% of total votes - Runoff
        let votesSecond = winners[1][1].votes;
        let percentageSecond = Math.floor(votesSecond / totalVotes * 100);
        console.log(`Runoff between ${winners[0][0]} with ${Math.floor(percentageFirst)}% and ${winners[1][0]} with ${percentageSecond}%`);
    }

    function sortCandidates(arr) {
        arr.sort(function (a, b) {
            return b[1] - a[1];
        });

        return arr;
    }

    function sortWinners(arr) {
        arr.sort(function (a, b) {
            return b[1].votes - a[1].votes;
        });

        return arr;
    }
}

// galacticElections([
//     {system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
//     {system: 'Sigma', candidate: 'Space Cow', votes: 200},
//     {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
//     {system: 'Tau', candidate: 'Space Cow', votes: 15},
//     {system: 'Sigma', candidate: 'Space Cow', votes: 60},
//     {system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
// ]);

// galacticElections([
//     {system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
//     {system: 'Tau', candidate: 'Space Cow', votes: 100},
//     {system: 'Theta', candidate: 'Space Cow', votes: 10},
//     {system: 'Sigma', candidate: 'Space Cow', votes: 200},
//     {system: 'Sigma', candidate: 'Flying Shrimp', votes: 75},
//     {system: 'Omicron', candidate: 'Flying Shrimp', votes: 50},
//     {system: 'Omicron', candidate: 'Octocat', votes: 75},
// ]);

// galacticElections([
//     {system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10},
//     {system: 'Tau', candidate: 'Kim Jong Andromeda', votes: 200},
//     {system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
// ]);