import React, { Component } from 'react';

class H1 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.children}</h1>
        <br/>
      </div>
    );
  }
}

class H2 extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.children}</h2>
        <br/>
      </div>
    );
  }
}

class H3 extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}

class H4 extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.children}</h4>
      </div>
    );
  }
}

class H5 extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.children}</h5>
      </div>
    );
  }
}

class H6 extends Component {
  render() {
    return (
      <div>
        <h6>{this.props.children}</h6>
      </div>
    );
  }
}


export { H1, H2, H3, H4, H5, H6 };