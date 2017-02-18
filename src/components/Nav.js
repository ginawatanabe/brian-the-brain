const React = require('react');

let NavContainerStyles = {
  height: 100,
  width: 'auto',
  backgroundColor: 'orange',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  fontSize: 20,
  font: 'Open Sans, serif'
}

let UlStyles = {
  height: 'inherit',
  width: 200,
  backgroundColor: 'blue',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  listStyleType: 'none',
  padding: 0,
  marginRight: 300
}


let Nav = React.createClass({
  render: function() {
    return (
      <div style={NavContainerStyles}>
        <ul style={UlStyles}>
          <li>Brian</li>
          <li>About</li>
        </ul>
      </div>
    )
  }
})

module.exports = Nav;
