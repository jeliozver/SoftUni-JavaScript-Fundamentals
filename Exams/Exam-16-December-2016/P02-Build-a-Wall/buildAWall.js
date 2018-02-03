function buildAWall(input) {
    let sections = [];
    for (let num of input) {
        sections.push(Number(num));
    }

    let concreteUsage = [];
    let cubicYardsPerDay = 195;
    let workingGroups = 0;
    let isComplete = false;

    while (!isComplete) {
        isComplete = true;
        workingGroups = 0;

        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sections[i]++;
                workingGroups++;
                isComplete = false;
            }
        }

        if (!isComplete) {
            concreteUsage.push(workingGroups * cubicYardsPerDay);
        }
    }

    let pesosPerCubicYard = 1900;
    let cubicYards = concreteUsage.reduce((a, b) => a + b, 0);
    let finalCost = pesosPerCubicYard * cubicYards;

    console.log(concreteUsage.join(', '));
    console.log(finalCost + ' pesos');
}

// buildAWall(['17']);
// buildAWall(['21', '25', '28']);
// buildAWall(['17', '22', '17', '19', '17']);