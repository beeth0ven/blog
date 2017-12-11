import { Component } from 'react';
import renderCode from './renderCode';
import { githubGist } from 'react-syntax-highlighter/styles/hljs';

class DiffCode extends Component {

  render() {
    return renderCode({
      props: this.props,
      language: 'diff',
      style: githubGist
    });
  }
}

export default DiffCode;
