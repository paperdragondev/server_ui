import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './areas/Landing/HomePage';

function Routes() {
  return (
    <Switch>
      FileRetriever
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default Routes;
