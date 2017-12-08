import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Operators from './Ariticles/Operators';

const Detail = () => (
  <Switch>
    <Route path='/posts/operators' render={() => <Operators/>}/>
    <Route path='/' render={() => <div/>}/>
  </Switch>
);

export default Detail;