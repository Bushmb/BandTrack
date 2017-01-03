/* Location Search 

	City, State/City, Country/Lat Long

	http://api.songkick.com/api/3.0/search/locations.json?query=tokyo+japan&apikey=QG143a2Qf7zybpnb

	With the my_zipcode_gem:
	geolocation = [zipcode.lat.to_s,zipcode.lon.to_s]
	lat/lng api call: "http://api.songkick.com/api/3.0/search/locations.json?location=geo:#{geolocation}&apikey=QG143a2Qf7zybpnb"
*/

/* Upcoming Events

	Song kick search for upcoming performances by location id 
	http://api.songkick.com/api/3.0/metro_areas/30717/calendar.json?apikey=QG143a2Qf7zybpnb

 	$.each loop of all of the data I want to pull out for each upcoming event
 	This will display all of the upcoming events for the location the user gives.
 */

 /* Spotify Search for Artist

 	Spotify search for artist by ['artist']['displayName'] 
 	received from song kick in order to receive the artist id (pull out artist id):

 	artist_name = upcoming_events['resultsPage']['results']['event'][‘performance’][‘artist’][‘displayName’]

 	"https://api.spotify.com/v1/search?q=#{artist_name}&type=artist”

 	Example: https://api.spotify.com/v1/search?q=Crosby+Stills+Nash&type=artist

 	artist_data = https://api.spotify.com/v1/search?q=Crosby+Stills+Nash&type=artist artist_id = artist_data['artists’][‘items’][‘id’] artist_image = artist_data[‘artists’][‘items’][‘images’][‘url']

 	*******somehow pullout artist image here as well. maybe… = image_tag 'artist_image'

 */

/* 	Search for locations: a city and its metro area. A metro area is a city or a 
	collection of cities that Songkick uses to notify users of concerts near them.

 	http://api.songkick.com/api/3.0/search/locations.json?query={search_query}&apikey={your_api_key}

 	var search_query = $('#locationInput').val();

 	RESPONSE:

 	{"resultsPage":
 	    {"results":
 	      {"location":[{
 	        "city":{"displayName":"London",
 	                "country":{"displayName":"UK"},
 	                "lng":-0.128,"lat":51.5078},
 	        "metroArea":{"uri":"http://www.songkick.com/metro_areas/24426-uk-london",
 	                     "displayName":"London",
 	                     "country":{"displayName":"UK"},
 	                     "id":24426,
 	                     "lng":-0.128,"lat":51.5078}},
 	        {"city":{"displayName":"London",
 	                 "country":{"displayName":"US"},
 	                 "lng":null,"lat":null,
 	                 "state":{"displayName":"KY"}},
 	        "metroArea":{"uri":"http://www.songkick.com/metro_areas/24580",
 	                     "displayName":"Lexington",
 	                     "country":{"displayName":"US"},
 	                     "id":24580,
 	                     "lng":-84.4947,"lat":38.0297,
 	                     "state":{"displayName":"KY"}}}
 	    ]},
 	    "totalEntries":2,"perPage":10,"page":1,"status":"ok"}
 	}

 	JSONP
 	When requesting data in JSON format, JSONP can be specified using the jsoncallback parameter. 
 	Here is an example of using JSONP from jQuery:

	$.getJSON("http://api.songkick.com/api/3.0/events.json?location=clientip&apikey={your_api_key}&jsoncallback=?",
	function(data){
	// data is JSON response object
	});

*/




/* 
	Once I have the results, need to pull out metroArea "id". 

	http://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}

	$.each loop of all of the data I want to pull out for each upcoming event
	This will display all of the upcoming events for the location the user gives.

	RESULTS:

	{
	  "resultsPage": {
	    "results": { "event": [
	      {
	        "id":11129128,
	        "type":"Concert",
	        "uri":"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
	        "displayName":"Wild Flag at The Fillmore (April 18, 2012)",
	        "start":{"time":"20:00:00",
	                 "date":"2012-04-18",
	                 "datetime":"2012-04-18T20:00:00-0800"},
	        "performance":[{"artist":{"uri":"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
	                                  "displayName":"Wild Flag","id":29835,"identifier":[]},
	                        "displayName":"Wild Flag",
	                        "billingIndex":1,
	                        "id":21579303,
	                        "billing":"headline"}],
	        "location":{"city":"San Francisco, CA, US","lng":-122.4332937,"lat":37.7842398},
	        "venue":{"id":6239,
	                 "displayName":"The Fillmore",
	                 "uri":"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
	                 "lng":-122.4332937, "lat":37.7842398,
	                 "metroArea":{"uri":"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
	                              "displayName":"SF Bay Area","country":{"displayName":"US"},"id":26330,"state":{"displayName":"CA"}}},
	        "status":"ok",
	        "popularity":0.012763
	      }, ....
	    ]},
	    "totalEntries":24,
	    "perPage":50,
	    "page":1,
	    "status":"ok"
	  }
	}


/*

/*
	With the Upcoming Events from Metro Area complete, need to use the performance displayName to find artist name

	Using displayName, need to request info from Spotify

	referrence: https://developer.spotify.com/web-api/search-item/

	var searchAlbums = function (query) {
	    $.ajax({
	        url: 'https://api.spotify.com/v1/search',
	        data: {
	            q: query,
	            type: 'artist'
	        },
	        success: function (response) {
	            resultsPlaceholder.innerHTML = template(response);
	        }
	    });
	};

	RESULT:

	Artist "id"

 */

 /* Using all artist "ids", need to 


QG143a2Qf7zybpnb

*******************************

http://api.songkick.com/api/3.0/artists/ID/gigography.json?apikey=KEY&min_date=2015-01-01&max_date=2015-12-31

521019

*/
