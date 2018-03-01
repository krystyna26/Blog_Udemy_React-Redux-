import React, { Component } from 'react';
// import { Route, withRouter } from 'react-router';

 class App extends Component {
  render() {
    return (
      <div>
        {/*  children is 'greeting' nested component in routes.js, component app is parent */}
        {this.props.children}
      </div>
    );
  }
}

// export default withRouter(App)

export default App;