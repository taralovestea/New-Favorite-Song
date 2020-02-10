// global scope variables for users song and artist
var userSong = "";
var userArtist = "linkin park";
function showHide() {
    let div = $("#hidden");
    if (div.style.display == 'none') {
        div.style.display = '';
    }
    else {
        div.style.display = 'none';
    }
}
// settings for the first API call for deezer
$("#user-artist-form").submit(function (event) {
    event.preventDefault();
    userArtist = $($(this).children()[0]).val()

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + userArtist,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "ca4558f8e7msha13efbb0514f28dp186e62jsn2e268f4acf89"
        }
    }
    // .done for first API request 
    $.ajax(settings).then(function (response) {
        let divHidden = $(".hidden");
        if (response.data !== null && response.data !== undefined && response.data.length !== 0) {
            $("#error").empty();
            [...divHidden].forEach(hiddenElement => {
                if (hiddenElement.style.display == 'none') {
                    hiddenElement.style.display = '';
                }
            })
            mySong = response.data[Math.floor(Math.random() * response.data.length)]
            userSong = "";
            userSong += mySong.title;
            $(".song-box").empty()
            $songBoxContent = $(`<p id="song-name" class="title">${mySong.title}</p>
                                <p id="artist-name" class="subtitle">${mySong.artist.name}</p>
                                <img src=${mySong.album.cover_medium}>
                                <br>
                                <br>
                                <audio controls>
                                    <source src="${mySong.preview}" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio>
                                <form action="${mySong.link}" target="_blank">
                                    <input class="button is-primary" type="submit" value="Keep Listening" />
                                </form>
`)
            $songBoxContent.appendTo($(".song-box"))

            // second API request with dependency on first API call 
            $(function () {
                $.ajax({
                    type: "GET",
                    data: {
                        apikey: "309788821d050a0623303261b9ddedc4",
                        q_track: userSong,
                        q_artist: userArtist,
                        format: "jsonp",
                        callback: "jsonp_callback"
                    },
                    url: "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
                    dataType: "jsonp",
                    jsonpCallback: 'jsonp_callback',
                    contentType: 'application/json',
                    success: function (data) {
                        myLyrics = data.message.body.lyrics.lyrics_body
                        myLyrics = myLyrics.replace(/[.\/#!?$%\^&\*;:{}=\-_`~]/g, "<br>")
                        // $(".content1 p").empty()
                        $(".content1 p").html(myLyrics)
                        // regex for replacing all periods with <br>'s
                        //$(".content1 p").innerHTML = ($($(".content1 p")).text().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"<br>"))
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
            });
        }
        else {
            $("#error").empty()
            $("#error").append(userArtist + "is not an available artist.");
            [...divHidden].forEach(hiddenElement => {
                hiddenElement.style.display = 'none';
            })
        }
    }).catch(function (error) {
        console.log(error + "this is an error")
    })

})




// deleted irrelevant api call

// new code for billboard


// mo.js code
const OPTS = {
    fill: 'none',
    radius: 25,
    strokeWidth: { 50: 0 },
    scale: { 0: 1 },
    angle: { 'rand(-35, -70)': 0 },
    duration: 500,
    left: 0, top: 0,
    easing: 'cubic.out'
};

const circle1 = new mojs.Shape({
    ...OPTS,
    stroke: 'cyan',
    delay: 'rand(249, 250)'

});

const circle2 = new mojs.Shape({
    ...OPTS,
    radius: { 20: 15 },
    strokeWidth: { 30: 0 },
    stroke: 'magenta',
    delay: 'rand(249, 250)'
});

document.addEventListener('mouseup', function (e) {
    circle1
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

    circle2
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

});

