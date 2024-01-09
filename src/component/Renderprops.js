// Mouse.js
import React from 'react';

class Renderprops extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
export default Renderprops;
// // App.js
// import React from 'react';
// import Mouse from './Mouse';

// const App = () => (
//   <div>
//     <h1>Render Props Example</h1>
//     <Mouse render={({ x, y }) => (
//       <p>Mouse position: {x}, {y}</p>
//     )} />
//   </div>
// );

// export default App;
