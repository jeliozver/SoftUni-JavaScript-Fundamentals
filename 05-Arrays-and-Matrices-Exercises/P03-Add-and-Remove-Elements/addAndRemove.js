function addAndRemove(args) {
    let counter = 1;
    let result = [];

    for (let i = 0; i < args.length; i++) {
        if (args[i] === 'add') {
            result.push(counter)
        } else {
            result.pop();
        }

        counter++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\r\n'));
    }
}

// addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// addAndRemove(['remove', 'remove', 'remove']);