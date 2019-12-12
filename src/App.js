import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

import routes from './routes';
import NotFoundPage from './pages/NotFound/NotFound';
import Nav from './Nav/Nav';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.MOVIES} component={MoviesPage} />
          <Route path={routes.MOVIES_DETAILS} component={MovieDetailsPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}

export default App;
