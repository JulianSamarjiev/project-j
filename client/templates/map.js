Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(42.7000, 23.3333),
        zoom: 12
      };
    }
  }
});

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {

    var initialLocation;
    var browserSupportFlag = new Boolean();
    var map;

    // Try W3C Geolocation (Preffered)
    if (navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
      }, function() {
        handleNoGeolocation(browserSupportFlag);
      });
    }
    // Browser doesn't support Geolocation
    else {
      browserSupportFlag = false;
      handleNoGeolocation(browserSupportFlag);
    }

  })
})
