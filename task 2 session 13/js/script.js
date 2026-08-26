let tracks = ["Web Design", ".NETwork", "UX"]

let userTrack = prompt("Enter a track")

if (tracks.includes(userTrack)) {
    alert("Found")
} else {
    tracks.push(userTrack)
    console.log(tracks)
}