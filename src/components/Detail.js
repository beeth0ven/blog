import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Detail = () => (
  <Switch>
    <Route path='/operators' render={() => {
      return (<h1>Operator</h1>)
    }}/>
    <Route path='/' render={() => {
      return (
        <div>

        </div>
      )
    }}/>
  </Switch>
);

export default Detail;