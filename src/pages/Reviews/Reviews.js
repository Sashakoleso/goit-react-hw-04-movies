import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../services/api';

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}.isRequired),
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    this.Reviews();
  }

  Reviews = () => {
    const { match } = this.props;
    const { moviesId } = match.params;

    API.Reviews(moviesId).then(resReviews => {
      this.setState({ reviews: resReviews.data.results });
    });
  };

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length !== 0 && (
          <ul>
            {reviews.map(el => (
              <li key={el.id}>
                <p>Author: {el.author}</p>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
