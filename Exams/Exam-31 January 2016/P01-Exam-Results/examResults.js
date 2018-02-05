function examResults(input) {
    let coursesStats = new Map();

    while (input.length > 0) {
        let args = input
            .shift()
            .split(' ')
            .filter(e => e !== '');

        if (args.length > 1) {
            let [name, course, points, bonuses] = args;

            if (!coursesStats.has(course)) {
                coursesStats.set(course, []);
            }

            coursesStats.get(course).push(Number(points));

            if (points >= 100) {
                let coursePoints = (80 * Number(points)) / 100;
                coursePoints = (Number(points) - coursePoints) + Number(bonuses);
                coursePoints = parseFloat(coursePoints.toFixed(2));
                let grade = (((coursePoints / 80) * 4) + 2);
                if (grade > 6) {
                    grade = 6.00;
                }
                console.log(`${name}: Exam - "${course}"; Points - ${coursePoints}; Grade - ${grade.toFixed(2)}`);
            } else {
                console.log(`${name} failed at "${course}"`);
            }
        } else {
            let course = args[0];
            let all = coursesStats.get(course);
            let sum = all.reduce((a, b) => a + b, 0);
            let average = (sum / all.length);
            average = parseFloat(average.toFixed(2));
            console.log(`"${course}" average points -> ${average}`);
        }
    }
}

// examResults([
//     'Pesho C#-Advanced 100 3',
//     'Gosho Java-Basics 157 3',
//     'Tosho HTML&CSS 317 12',
//     'Minka C#-Advanced 57 15',
//     'Stanka C#-Advanced 157 15',
//     'Kircho C#-Advanced 300 0',
//     'Niki C#-Advanced 400 10',
//     'C#-Advanced',
// ]);