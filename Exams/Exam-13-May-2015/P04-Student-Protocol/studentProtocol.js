function studentProtocol(input) {
    let regex = /(.+)\s*-\s*(.+)\s*:\s*(.+)/;
    let protocol = new Map();

    for (let line of input) {
        let match = regex.exec(line);
        let name = match[1].trim();
        let exam = match[2].trim();
        let score = Number(match[3].trim());
        if (score < 0 || score > 400) continue;
        if (!protocol.has(exam)) {
            protocol.set(exam, []);
        }

        let students = protocol.get(exam);
        let isStudentFound = false;
        for (let student of students) {
            if (student.name === name) {
                if (student.result < score) student.result = score;
                student.makeUpExams += 1;
                isStudentFound = true;
                break;
            }
        }

        if (!isStudentFound) {
            let newStudent = {
                name: name,
                result: score,
                makeUpExams: 0
            };

            students.push(newStudent);
        }

        protocol.set(exam, students);
    }

    let sortedMap = new Map();
    for (let [exam, results] of protocol) {
        results = sortResults(results);
        sortedMap.set(exam, results);
    }

    let result = mapToObj(sortedMap);
    console.log(JSON.stringify(result));

    function sortResults(arr) {
        arr.sort(function (a, b) {
            if (a.result !== b.result) {
                return b.result - a.result;
            } else {
                if (a.makeUpExams !== b.makeUpExams) {
                    return a.makeUpExams - b.makeUpExams;

                } else {
                    return a.name.localeCompare(b.name);
                }
            }
        });

        return arr;
    }

    function mapToObj(map) {
        return Array.from(map).reduce((obj, [key, value]) => (
            Object.assign(obj, {[key]: value})
        ), {});
    }
}

studentProtocol([
    'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Peter Jackson - PHP: 350',
    'Simon Cowell - PHP : 400',
]);

studentProtocol([
    'Peter Jackson - Java : 350',
    'Jane - JavaScript : 200',
    'Jane     -    JavaScript :     400',
    'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Simon Cowell - PHP : 200',
]);