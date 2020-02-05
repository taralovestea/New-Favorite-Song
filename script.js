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
    console.log(response)
    mySong = response.data[0]
    $(".title").text(mySong.title)
    $(".subtitle").text(mySong.artist.name)
    $songBoxContent = $(`<img src=${mySong.album.cover_medium}>`)
    $songBoxContent.appendTo($(".song-box"))
});

// deleted irrelevant api call

// new code for billboard
$(function () {

    $.ajax({
        type: "GET",
        data: {
            apikey: "309788821d050a0623303261b9ddedc4",
            q_track: "darkness",
            q_artist: "eminem",
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function (data) {
            // myLyrics = data.message.body.lyrics.lyrics_body
            // var lyrics = $(`<p>${myLyrics}</p>`)
            // lyrics.appendTo($(".song-box"))
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
});

// mo.js code