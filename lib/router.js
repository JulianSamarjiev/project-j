
// Page routing
Router.configure ({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('jumbotron');
});

Router.route('/map', function () {
  this.render('map');
});

Router.route('/submit', function () {
  this.render('submit');
});

// Loading map only on specific routes
// Router.onBeforeAction(function () {
//   GoogleMaps.load();
//   this.next();
// }, { only: ['map'] });
