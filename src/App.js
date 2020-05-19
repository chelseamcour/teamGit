import React, { Component } from "react";
//import "./App.css";
import Nasa from './Nasa';
import OpenWeather from './OpenWeather';
import Zomato from './Zomato';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      latitude: null,
      longitude: null,
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("latititude is:", position.coords.latitude);
      console.log("longititude is:", position.coords.longitude);
      this.setState ({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Based on your location, here is some vital information for you!</h1>
        </header>
        <Nasa latitude={this.state.latitude} longitude={this.state.longitude} />
        <OpenWeather latitude={this.state.latitude} longitude={this.state.longitude} />
        <Zomato latitude={this.state.latitude} longitude={this.state.longitude} />
      </div>
    );
  }
}

export default App;