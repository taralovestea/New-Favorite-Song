var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "ca4558f8e7msha13efbb0514f28dp186e62jsn2e268f4acf89"
    }
}
// comment added for git help
$.ajax(settings).done(function (response) {
    mySong = response.data[0]
    $songBoxContent = $(`<h2>${mySong.title}</h2>
                        <h4>By ${mySong.artist.name}</h4>
                        <img src=${mySong.album.cover_medium}>`)
    $songBoxContent.appendTo($(".song-box"))
});


var songName = "bad";
var artistName = "michael jackson";
var settings = {
    "async": true,
    "crossDomain": true,
    //"url": `https://api.chartlyrics.com/apiv1.asmx/SearchLyric?artist=${artistName}&song=${songName}`,
    "url": `https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=${artistName}&song=${songName}`,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com",
        "x-rapidapi-key": "9975c1386cmshca62308f2c47475p14a7abjsn022a4fb62050"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
    console.log("got here")
    $(".lyrics").append(response.getElementsByTagName("Lyric")[0].innerHTML);

});