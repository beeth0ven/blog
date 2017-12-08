import { Component } from 'react';
import renderCode from './renderCode';

class DiffCode extends Component {

  render() {
    return renderCode(this.props, 'diff');
  }
}

export default DiffCode;
