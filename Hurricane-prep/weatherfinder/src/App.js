import React from 'react';
import Titles from "./Components/Titles"
import Form from "./Components/Form"
import Weather from "./Components/Weather"

const API_Key = "ee04b6e64b469c21f28213f37fa9d282";

//1
class App extends React.Component{
  state = {
    temperature: undefined,
    feels_like: undefined,
    weather: undefined,
    pressure: undefined,
    city: undefined,
    humidity: undefined,
    windspeed: undefined,
    clouds: undefined,
    error: undefined,
  }

  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${API_Key}&q=${city}`);
    const data = await api_call.json();
    if (city) {
      console.log(data);
    //2
    this.setState({
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      pressure: data.main.pressure,
      city: data.name,
      weather: data.weather,
      humidity: data.main.humidity,
      windspeed: data.wind.speed,
      clouds: data.clouds.all,
      error: ""
    });
    //3
    } else {
      this.setState({
        temperature: undefined,
        feels_like: undefined,
        weather: undefined,
        pressure: undefined,
        city: undefined,
        humidity: undefined,
        windspeed: undefined,
        clouds: undefined,
        error: "Please enter the value"
      });
    }
  }
  render(){
    return(
      <div>
        <Titles/>
        <Form getweather = {this.getweather}/>
        <Weather 
        //4
        temperature={this.state.temperature}
        feels_like={this.state.feels_like}
        pressure={this.state.pressure}
        city={this.state.city}
        humidity={this.state.humidity}
        windspeed={this.state.windspeed}
        clouds={this.state.clouds}
        error={this.state.error}
        />
      </div>
    )
  }
}

export default App;