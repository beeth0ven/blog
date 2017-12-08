import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/styles/hljs';
import dedent from 'dedent-js';

const renderCode = (props, language) => {
  const { children, isDedent = true } = props;
  const code = isDedent ? dedent(children) : children;
  return (
    <SyntaxHighlighter
      language={language}
      style={xcode}>
      {code}
    </SyntaxHighlighter>
  )
};

export default renderCode;