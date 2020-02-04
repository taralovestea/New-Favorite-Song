var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "43436ee7f9msh1eb7a568ccf6e2bp17d718jsn3e90d0c42df5"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});