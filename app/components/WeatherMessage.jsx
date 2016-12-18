import React from 'react';

let WeatherMessage = ({temp, location}) => {

  return (
    <div>
      <h3>It is {temp} in {location}</h3>
    </div>
  );
}

export default WeatherMessage;
