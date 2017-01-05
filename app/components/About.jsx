import React from 'react';
import {Link} from 'react-router';

let listStyle = {
  listStyle: 'none'
};

let About = props => {
  return(
    <div>
      <h1 className='text-center' >About</h1>
      <p>React Weather App, From Andrew Meads React tutorial on udemy</p>
      <div className='callout'>
        Here are some of the tools I used:
      <ul style={listStyle}>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - framework used to build the site
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation.zurb.com</a> - style framework used
        </li>
        <li>
          <a href="http://openweathermap.org/">openWeatherMap.org</a> - I used openweather map to get weather data by city name
        </li>
        <li>
          <a href="https://github.com/jasonrez/ReactWeather">ReactWeather</a> - Repo for this project on gitub
        </li>
      </ul>
      </div>
    </div>
  );
};

export default About;
