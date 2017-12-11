import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/styles/hljs';
import dedent from 'dedent-js';

const renderCode = ({ props, language, style }) => {
  const { children, isDedent = true } = props;
  const code = isDedent ? dedent(children) : children;
  return (
    <SyntaxHighlighter
      className='element'
      language={language}
      style={style || xcode}>
      {code}
    </SyntaxHighlighter>
  )
};

export default renderCode;