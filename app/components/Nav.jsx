import React from 'react';
import {Link, IndexLink} from 'react-router';

let Nav = props => {
  return (
    <div>
      <h2>Nav Component!!!</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>

    </div>
  );
}

export default Nav;
