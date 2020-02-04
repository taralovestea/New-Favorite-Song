
var songName="bad";
var artistName="michael jackson";
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