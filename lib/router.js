
// Page routing
Router.configure ({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('jumbotron');
});

Router.route('/search', function () {
  this.render('search');
});

Router.route('/submit', function () {
  this.render('submit');
});

// Loading map only on specific routes
// Router.onBeforeAction(function () {
//   GoogleMaps.load();
//   this.next();
// }, { only: ['map'] });
