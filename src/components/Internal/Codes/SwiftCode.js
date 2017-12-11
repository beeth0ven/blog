import { Component } from 'react';
import renderCode from './renderCode';

class SwiftCode extends Component {

  render() {
    return renderCode({
      props: this.props,
      language: 'swift'
    });
  }
}

export default SwiftCode;


