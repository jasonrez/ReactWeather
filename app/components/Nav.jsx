import React from 'react';
import {Link, IndexLink} from 'react-router';
import ErrorModal from 'ErrorModal';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      navError : false
    }
  }

  //setter to toggle navError
  toggleNavError(){
    this.setState({ navError: !this.state.navError})
  }

  onSearch(e){
    e.preventDefault();
    this.toggleNavError();
  }

  render(){
    let {navError} = this.state;

    function checkFeature(){
      if (navError){
        return (
          <ErrorModal message='Not plugged in yet' cd={function() { alert('worked');}} />
        )
      }
    }

    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className='menu'>
              <li>
                <input type='search' placeholder='searchWeather'/>
              </li>
              <li>
                <input type='submit' className='button' value='Get Weather' />
              </li>
            </ul>

          </form>
        </div>
        {checkFeature()}
      </div>
    );

  }
};


export default Nav;
