function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album("Atif Aslam", "Jal Pari"));
console.log(make_album("Strings", "Dhaani"));
console.log(make_album("Junoon", "Inquilaab", 12)); 