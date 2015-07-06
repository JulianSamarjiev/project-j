var Dashboard = React.createClass({
  getInitialState: function() {
    return {value: 'Add location'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
});

React.render(
  <Dashboard />, document.getElementById('app')
);
