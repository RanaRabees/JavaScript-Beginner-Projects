
// Task - 38:

// 38. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.


function make_album(artist_name, album_title, no_of_tracks = '') {
    if (no_of_tracks) {
        let dict = {
            'artist': artist_name,
            'album': album_title,
            'tracks': no_of_tracks
        }
        return dict
    } else {
        let dict = {
            'artist': artist_name,
            'album': album_title
        }
        return dict
    }
}
console.log(make_album('Jungkook', 'Broken Angel'))
console.log(make_album('Jimin', 'Feel the magic in the air'))
console.log(make_album('Suga', 'Beautiful Eye'))
console.log(make_album('taehyung', 'Dark night', '7'))
console.log(make_album('hobby', 'Red blood', '5'))

