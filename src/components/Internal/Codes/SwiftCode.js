import { Component } from 'react';
import renderCode from './renderCode';

class SwiftCode extends Component {

  render() {
    return renderCode(this.props, 'swift');
  }
}

export default SwiftCode;


