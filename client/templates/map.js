
// Loading map on startup
Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  locationsOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(52.524268, 13.406290),
        zoom: 10
      };
    }
  }
});
