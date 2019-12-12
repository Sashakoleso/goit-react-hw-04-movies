import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import * as API from '../../services/api';

export default class HomePage extends Component {
  state = {
    popular: [],
  };

  componentDidMount() {
    API.trendingFilms().then(resData => {
      // console.log('resData', resData);
      this.setState({ popular: resData.data.results });
    });
  }

  render() {
    const { popular } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {popular.map(el => (
            <li key={el.id}>
              <Link to={`${routes.MOVIES}/${el.id}`}> {el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
