import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
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

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
      }, function (e) {
        self.setState({
          isLoading: false,
          errorMessage: e.message
        });
      });
  };

  componentDidMount(){
    let location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(newProps){
    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  render(){
    let {isLoading, location, temp, errorMessage} = this.state;

    function renderMesage(){
      if (isLoading){
        return <h3 className='text-center'>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
            <h1 className='text-center page-title'>Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch.bind(this)}/>
            {renderMesage()}
            {renderError()}
      </div>
          );
  }
}
