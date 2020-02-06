// global scope variables for users song and artist
var userSong= "";
var userArtist= "linkin park";
// settings for the first API call for deezer
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
$.ajax(settings).done(function (response) {
    console.log(response.data)
    mySong = response.data[Math.floor(Math.random() * response.data.length)]
    userSong ="";
    userSong+=mySong.title;
    $(".title").text(mySong.title)
    $(".subtitle").text(mySong.artist.name)
    $songBoxContent = $(`<img src=${mySong.album.cover_medium}>`)
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
                url: "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
                dataType: "jsonp",
                jsonpCallback: 'jsonp_callback',
                contentType: 'application/json',
                success: function (data) {
                    console.log(data)
                    myLyrics = data.message.body.lyrics.lyrics_body
                    var lyrics = $(`<p>${myLyrics}</p>`)
                    lyrics.appendTo($(".content1"))
                    // regex for replacing all periods with <br>'s
                    $(".content1 p")[1].innerHTML = ($($(".content1 p")[1]).text().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "<br>"))
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        });
});




// deleted irrelevant api call

// new code for billboard


// mo.js code
const OPTS = {
    fill:           'none',
    radius:         25,
    strokeWidth:    { 50 : 0 },
    scale:          { 0: 1 },
    angle:          { 'rand(-35, -70)': 0 },
    duration:       500,
    left: 0,        top: 0,
    easing: 'cubic.out'
  };
  
  const circle1 = new mojs.Shape({
    ...OPTS,
    stroke:         'cyan',
  });
  
  const circle2 = new mojs.Shape({
    ...OPTS,
    radius:         { 0 : 15 },
    strokeWidth:    { 30: 0 },
    stroke:         'magenta',
    delay:          'rand(75, 150)'
  });
  
  document.addEventListener( 'click', function (e) {
    
     circle1
      .tune({ x: e.pageX, y: e.pageY  })
      .replay();
    
    circle2
      .tune({ x: e.pageX, y: e.pageY  })
      .replay();
    
  });
  
  function showHide() {
    let div = document.getElementById(hideen);
    if (div.style.display == 'none') {
        div.style.display = '';
    }
    else {
        div.style.display = 'none';
    }
}