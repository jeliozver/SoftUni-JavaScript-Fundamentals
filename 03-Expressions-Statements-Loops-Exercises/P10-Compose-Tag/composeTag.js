function composeTag(args) {
    let location = args[0];
    let text = args[1];

    console.log(`<img src="${location}" alt="${text}">`);
}

// composeTag(['smiley.gif', 'Smiley Face']);