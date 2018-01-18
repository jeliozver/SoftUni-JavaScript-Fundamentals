function nowPlaying(args) {
    let track = args[0];
    let artist = args[1];
    let duration = args[2];

    console.log(`Now Playing: ${artist} - ${track} [${duration}]`)
}

// nowPlaying(['Number One', 'Nelly', '4:09']);
// nowPlaying(['Shushana', 'Nasko Mentata', '3:01']);