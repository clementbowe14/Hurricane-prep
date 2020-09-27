import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            //5
<div>
    { this.props.city && <p>Location: {this.props.city}</p>}
    { this.props.temperature && <p>Temperature (kelvin): {this.props.temperature}</p>}
    { this.props.feels_like && <p>Feels like (kelvin): {this.props.feels_like}</p>}
    { this.props.pressure && <p>Pressure: {this.props.pressure}</p>}
    { this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
    { this.props.windspeed && <p>WindSpeed (mph): {this.props.windspeed}</p>}
    { this.props.clouds && <p>Clouds: {this.props.clouds}</p>}

        {this.props.error && <p> {this.props.error}</p>}



</div>
        );
    }
}

export default Weather; 


//API-KEY = ee04b6e64b469c21f28213f37fa9d282
//http://api.openweathermap.org/data/2.5/weather?APPID=%7BAPI_KEY%7Dq=london