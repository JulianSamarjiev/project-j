var Dashboard = React.createClass({
  render: function() {
    return <div>Hello from React</div>;
  }
});

Template.dashboard.helpers({
  Dashboard() {
    return Dashboard;
  }
})
