
// Loading map on startup
Meteor.startup(function() {
  GoogleMaps.load({ libraries: 'places' });
});

Template.map.helpers({
  locationsOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(52.524268, 13.406290),
        zoom: 12
      };
    }
  }
});

Template.map.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('locations', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
