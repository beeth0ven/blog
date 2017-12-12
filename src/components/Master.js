import React from 'react';
import { Link } from 'react-router-dom';
import { List } from './Internal/ArticleComponents/Lists';
import { H3 } from './Internal/ArticleComponents/H1'

const Master = () => (
  <div>
    <H3>Posts:</H3>
    <List>
      <li><Link to='/posts/operators'>Operators 2017-12-6</Link></li>
    </List>
  </div>
);

export default Master