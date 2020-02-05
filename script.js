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
    console.log(mySong)
    $(".title").text(mySong.title)
    $(".subtitle").text(mySong.artist.name)
    $songBoxContent = $(`<img src=${mySong.album.cover_medium}>`)
    $songBoxContent.appendTo($(".song-box"))
});
