import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className='text'>
        {this.props.children}
      </ul>
    );
  }
}

class OrderedList extends Component {
  render() {
    return (
      <ol className='text'>
        {this.props.children}
      </ol>
    );
  }
}

export { List, OrderedList };