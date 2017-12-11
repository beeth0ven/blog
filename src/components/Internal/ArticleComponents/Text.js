import React, { Component } from 'react';
import './index.css';

class Text extends Component {
  render() {
    return (
      <div className='text'>
        {this.props.children}
      </div>
    );
  }
}

export default Text;