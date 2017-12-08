import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Content from './Content';

const App = () => (
  <Router>
    <div>
      <Header/>
      <Content/>
    </div>
  </Router>
);

export default App;
