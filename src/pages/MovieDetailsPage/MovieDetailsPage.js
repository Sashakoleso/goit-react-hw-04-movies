/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import Cast from '../Cast/Cast';
import routes from '../../routes';
import * as API from '../../services/api';

export default class MovieDetailsPage extends Component {
  state = {
    details: { genres: [] },
  };

  componentDidMount() {
    const { match } = this.props;
    const { moviesId } = match.params;
    API.detailFilms(moviesId).then(resDatails => {
      this.setState({ details: resDatails.data });
      // console.log('KOLESO :', details);
    });
  }

  returnToPrevLocation = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { details } = this.state;
    const { match } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          width: '900px',
        }}
      >
        <button
          style={{
            width: '50px',
            marginBottom: '10px',
          }}
          type="button"
          onClick={this.returnToPrevLocation}
        >
          Go back
        </button>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt="uniqe"
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '900px',
            }}
          >
            <h2>{details.original_title}</h2>
            <p>
              Overview:
              <br /> {details.overview}
            </p>
            <p>
              User Score <br />
              {details.vote_average * 10}%
            </p>
            <p>
              Genres <br />
            </p>
            {details.genres.reduce((acc, el) => `${acc} ${el.name}`, '')}
            {/* {details.genres.map(el => el.name)} */}
          </div>
        </div>
        <div>
          <p>
            Additional Info <br />
          </p>
        </div>
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          <li>
            <NavLink
              style={{
                textDecoration: 'none',
              }}
              to={`${match.url}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                textDecoration: 'none',
              }}
              to={`${match.url}/reviews`}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path={routes.REVIEWS_MOVIE} component={Reviews} />
          <Route exact path={routes.CAST_MOVIE} component={Cast} />
        </Switch>
      </div>
    );
  }
}
