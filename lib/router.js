
Router.configure ({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('jumbotron');
});
