function parseEmployeeData(data) {
    let regex = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/;
    for (let i = 0; i < data.length; i++) {
        let current = data[i];
        let match = regex.exec(current);
        if (match) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}

// parseEmployeeData([
//     'Isacc - 1000 - CEO',
//     'Ivan - 500 - Employee',
//     'Peter - 500 - Employee',
// ]);

// parseEmployeeData([
//     'Jonathan - 2000 - Manager',
//     'Peter- 1000- Chuck',
//     'George - 1000 - Team Leader',
// ]);