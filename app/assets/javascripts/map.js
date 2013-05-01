
var map;

// intializes a new google map from API
function initialize() {

  // a location to set initial map center
	var myCurrentLocation = new google.maps.LatLng(40.7399977, -73.9900976);

  var mapOptions = {
    zoom: 13,
    center: myCurrentLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var marker = new google.maps.Marker({
      position: myCurrentLocation,
      map: map,
      title: "I'm at GA"
  });
};
 
function putMarkers(latitude, longitude, name) {
 var todoItemLtLng = new google.maps.LatLng(latitude,longitude);

	 var marker = new google.maps.Marker({
    position: todoItemLtLng,
    map: map,
    title: name
		}); 
};

function recenterMap(lat, lng) {
  var newCenter = new google.maps.LatLng(lat, lng);
  map.setCenter(newCenter);
};


			



