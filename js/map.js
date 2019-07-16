function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: 13.7535706, lng: 100.5523548},
    // styles: mapStyles
  });

  var image = 'https://jourd-bigtrees.s3-ap-southeast-1.amazonaws.com/markers/tree1.png';
  
  makkasanTrees.forEach(function(item, index) {
    var marker = new google.maps.Marker({
      position: {lat: item.location.coordinates[1], lng: item.location.coordinates[0]},
      map: map,
      icon: image
    });
    marker.addListener('click', function() {
      $('#treeMapModal').find('.modal-title').text(item.tree_name)
      $('#treeMapModal').find('.tree-name').text(item.tree_name)
      $('#treeMapModal').find('.tree-height').text(item.tree_height + " ม.")
      $('#treeMapModal').find('.tree-radius').text(item.tree_canopy_radius + " ม.")
      if (item.tree_circumference) {
        $('#treeMapModal').find('.tree-circumference').text(item.tree_circumference + " ซ.ม.")
      } else {
        $('#treeMapModal').find('.tree-circumference').text("")
      }
      $('#treeMapModal').find('.carousel-inner').empty()
      item.photos.forEach(function(photo, index) {
        $('#treeMapModal').find('.carousel-inner').append('<div class="carousel-item"><img class="d-block w-100" src="' + photo + '"></div>')
      })
      $('#treeMapModal').find('.carousel-item').first().addClass('active')

      if (item.photos.length <= 1) {
        $('#treeMapModal').find('.carousel-control-prev').hide()
        $('#treeMapModal').find('.carousel-control-next').hide()
      }
      if (item.photos.length > 1) {
        $('#treeMapModal').find('.carousel-control-prev').show()
        $('#treeMapModal').find('.carousel-control-next').show()
      }
      $('#treeMapModal').find('.tree-carousel').carousel({
        interval: 2000
      })

      $('#treeMapModal').modal('show')
    });
  })


  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 12,
    center: {lat: 13.7530479, lng: 100.4987881},
    styles: mapStyles
  });

  bigtrees.forEach(function(item, index) {
    var latlng = item.location.split(",").map(item => item.trim());
    if (latlng.length < 2) {
      return
    }
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1])},
      map: map2,
      icon: image
    });
    marker.addListener('click', function() {
      var btModal = $('#bigtreesMapModal')
      btModal.find('.modal-title').text(item.name)
      btModal.find('.name').text(item.name)
      btModal.find('.submitter').text("ส่งโดย " + item.submitter)
      btModal.find('.address').text('ต้นไม้ตั้งอยู่ที่ ' + item.address)
      btModal.find('.detail').text(item.detail)
      btModal.find('.tree-image').attr('src', 'images/bigtrees/' + item.cat + '/' + item.id + '.jpg')
      
      btModal.modal('show')
    });
  })

}

var mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
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
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]