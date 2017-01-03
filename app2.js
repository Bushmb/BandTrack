var map;
var tour;
var markers = [];

function initMap(locations) {

	var styledMapType = new google.maps.StyledMapType(
	[
	  {
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "on"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.country",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.locality",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#bdbdbd"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#181818"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#1b1b1b"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#2c2c2c"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#8a8a8a"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#373737"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#3c3c3c"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway.controlled_access",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#4e4e4e"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "transit",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#000000"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#3d3d3d"
	      }
	    ]
	  }
	],
	{name: 'Styled Map'});

map = new google.maps.Map(document.getElementById('map'), {
  zoom: 3,
  center: {lat: 0, lng: 0},
  mapTypeControlOptions: {
              mapTypeIds: ['styled_map']
            }
});

map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');	

}  //end of initMap();

function setMarkers(locations, eventDate, eventName) {

	clearMarkers();
	// setMap(null);
	// var concertLocations = locations;
	var count = 1;
	

	// loop over concertLocations and add pin
		locations.forEach(function(location, i){
			window.setTimeout(function() {	
			  markers.push(new google.maps.Marker({
			    position: location,
			    map: map,
			    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+count+'|5e769b|000000',
			    title: eventName[i] + " "+ eventDate[i],
			    animation: google.maps.Animation.DROP
			  }));
			  
			  count++;
			}, i * 205);

			
			 
			// if(count == concertLocations.length) {
			// 	// call next function
			// }
		})
		
			
		locations.reduce(function(prev, curr, i)  {
			console.log("PREV", prev)
			window.setTimeout(function() {
				tour = new google.maps.Polyline({
				  path: [prev, curr],
				  geodesic: true,
				  strokeColor: 'yellow',
				  strokeOpacity: 0.5,
				  strokeWeight: 2
				});
				tour.setMap(map);
				// console.log("POLYLINE" + tour);
				
			}, i * 225);
			return curr;
		})
			

			

}

// function tourTimeline(locations) {
// 	var tour = new google.maps.Polyline({
// 	  path: locations,
// 	  geodesic: true,
// 	  strokeColor: 'yellow',
// 	  strokeOpacity: 1.0,
// 	  strokeWeight: 2
// 	});

// 	;
// }



function clearMarkers() {


	for (var i = 0; i < markers.length; i++) {
	  // tour[i].pop();
	  markers[i].setMap(null);

	}
	markers = [];

}




function getArtistIdFromApi(searchTerm) {
	// var artistName = searchTerm;
	var myApiKey = "ofqFcyXEVBW3U9se";

	var url = "http://api.songkick.com/api/3.0/search/artists.json?query="+searchTerm+"&apikey="+myApiKey;



	$.getJSON(url + "&jsoncallback=?", function(data){
		var artistList = data.resultsPage.results.artist;
		console.log(artistList[0].displayName + " " + artistList[0].id);

		var create = '<select id="artistSelection">';
		    for(var i = 0; i < artistList.length;i++)
		    {
		        create += '<option value="'+artistList[i].id+'">'+artistList[i].displayName+'</option>';
		    }
		    create += '</select>';
		    jQuery('#dropdown').append(create);

		//testing for results    

		for (i = 0; i < artistList.length; i++) {
			console.log(artistList[i].displayName+""+artistList[i].id);
		};

		getEventHistoryFromApi(artistList[0].id);
		

	});

	

}

function getEventHistoryFromApi(artistId) {
	var myApiKey = "ofqFcyXEVBW3U9se";

	var url = "http://api.songkick.com/api/3.0/artists/" + artistId + "/gigography.json?apikey=" + myApiKey + "&min_date=2015-01-01&max_date=2016-12-31";

	//"http://api.songkick.com/api/3.0/search/artists.json?query={search_query}&apikey={your_api_key}"

	$.getJSON(url + "&jsoncallback=?", function(data){
		var eventList = data.resultsPage.results.event;
		console.log(eventList);

		if (eventList != undefined) {

			var eventName = eventList.reduce(function(eventArr, event){
				eventArr.push(event.displayName);
				return eventArr;
			}, []);

			var eventDate = eventList.reduce(function(eventArr, event){
				eventArr.push(event.start.date);
				return eventArr;
			}, []);


			var locations = eventList.reduce(function(eventArr, event){
				delete event.location.city;
				eventArr.push(event.location);
				return eventArr;
			}, []);
			
			console.log("NAMES" + eventName);
			console.log("DATES" + eventDate);
			setMarkers(locations, eventDate, eventName);
		}
		else {
			$('.errMsg').show().fadeOut(1200);        
			return false;
		}

	});

}


function watchSubmit() {
	$('.js-search-form').submit(function(e) {
		e.preventDefault();
		$("#bandname").blur(); 
		$('#dropdown').html("");
		// if (tour != undefined) {
		// 	initMap();
		// }
		var searchTerm = $('#bandname').val();
		// console.log(searchTerm);
		getArtistIdFromApi(searchTerm);
		//initMap();
		
	});
 }

function watchArtistSelection() {

	$("#search-bar").on('change',"#artistSelection", function(){
	    console.log("artistId " + this.value);
	    getEventHistoryFromApi(this.value);

	});  
	// var artistChoice = $('#artistSelection option:selected').val();
	// console.log("selected item" + artistChoice);
	// getEventHistoryFromApi(artistChoice);

}

// function myMap() {
//   var mapCanvas = document.getElementById("map");
//   var mapOptions = {
//     center: new google.maps.LatLng(51.5, -0.2), 
//     zoom: 10
//   }
//   var map = new google.maps.Map(mapCanvas, mapOptions);

//   map.mapTypes.set('styled_map', styledMapType);
//   map.setMapTypeId('styled_map');

//   var mapCanvas = new google.maps.Map(document.getElementById('map'), {

//     zoom: 5,
//     center: {lat: 37.09024, lng: -95.712891},
//     mapTypeControlOptions: {
//                 mapTypeIds: ['styled_map']
//               }
//   });

//   map.mapTypes.set('styled_map', styledMapType);
//   map.setMapTypeId('styled_map');
// }

// function firstMap() {
//         var uluru = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }



 $(document).ready(function() {

 	watchSubmit();
 	watchArtistSelection();
 	//initMap();
 	

 });




