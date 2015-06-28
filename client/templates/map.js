
// Loading map on startup
Meteor.startup(function() {
  GoogleMaps.load({ key: 'AIzaSyC_mE9TthiEAEkkgROtoj9xUSglMq1vChE', libraries: 'places' });

  var autoComplete = new google.maps.places.Autocomplete(
  document.getElementById(search), {
    types: ['(cities)']
  });

  google.maps.event.addListener(autoComplete, 'place_changed', function() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
       map.panTo(place.geometry.location);
       map.setZoom(15);
    }
  });

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
