
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.501477,-0.058456),
  zoom:13,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var label = "ABCDEFGHIJKLMNOP";

var locations = [
    {lat:51.497309, lng:-0.036993},
    {lat:51.503133, lng:-0.003691},
    {lat:51.482900, lng:-0.009763},
];

const markers = locations.map((location, i) => {
    return new myMap.maps.marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
