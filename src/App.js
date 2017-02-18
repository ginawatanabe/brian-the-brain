const React = require('react');
import './App.css';
let Nav = require('./components/Nav');

let App = React.createClass({
  render: function() {
    return (
    <div>
      <Nav />
    </div>
    );
  }
})

export default App;
