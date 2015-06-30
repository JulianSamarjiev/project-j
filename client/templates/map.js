Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {

    if(navigator.geolocation) {
      // Support
    } else {
      // No support
    }

  })
})
