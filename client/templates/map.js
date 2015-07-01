Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(42.7000, 23.3333),
        zoom: 8
      };
    }
  }
});

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {

    if (navigator.geolocation) {
      // Support
      navigator.geolocation.getCurrentPosition(function(position) {
        var current = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      });
    } else {
      // No support
      console.log("Something is wrong!")
    }

  })
})
