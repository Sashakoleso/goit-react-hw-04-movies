import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Nav = () => {
  return (
    <ul
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '200px',
        // margin: '0 auto',
        listStyle: 'none',
      }}
    >
      <li>
        <NavLink to={routes.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={routes.MOVIES}>Movies</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
