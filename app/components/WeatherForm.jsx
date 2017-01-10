import React from 'react';

export default class WeatherForm extends React.Component{
  onFormSubmit(e){
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value ='';
      this.props.onSearch(location);
    }
  };

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
            <input type="search" ref="location" placeholder="Search weather by city"/>
            <button className='hollow button expanded'>Get Weather</button>
        </form>
      </div>
  );
  }
};
