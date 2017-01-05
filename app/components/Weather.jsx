import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    };
  };
  handleSearch(location){
    let self = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
      }, function (errorMessage) {
        self.setState({isLoading: false});
        alert(`We Have a Error sir ${errorMessage}`);
      })
  };

  render(){
    let {isLoading, location, temp} = this.state;

    function renderMesage(){
      if (isLoading){
        return <h3 className='text-center'>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return(
      <div>
            <h1 className='text-center'>Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch.bind(this)}/>
            {renderMesage()}
      </div>
          );
  }
}
