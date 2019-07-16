function initMap() {
  console.log("initMap")
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 13.7509746, lng: 100.5583743}
  });

  var image = 'https://beta.youpin.city/public/image/marker-m-3d.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 13.7509746, lng: 100.5583743},
    map: map,
    icon: image
  });
}