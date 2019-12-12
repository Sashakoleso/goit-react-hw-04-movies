import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../services/api';

class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}.isRequired),
    }).isRequired,
  };

  state = {
    cast: [],
  };

  componentDidMount() {
    this.Credits();
  }

  Credits = () => {
    const { match } = this.props;
    const { moviesId } = match.params;

    API.Credits(moviesId).then(resCast => {
      this.setState({ cast: resCast.data.cast });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          CAST
          {cast.map(el => (
            <li key={el.id}>
              <img
                alt={el.name}
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
