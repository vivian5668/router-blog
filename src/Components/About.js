import React, { Component } from 'react';
const axios = require('axios');

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      zipcode: ''
  }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value})
    console.log('Your zip code is' + this.state.zipcode)
  }

  handleSubmit(event) {
  	event.preventDefault()
  	let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip='+ this.state.zipcode + ',us&appid=052f26926ae9784c2d677ca7bc5dec98'
    axios.get(weatherApi)
    	.then((response) => {
    		console.log(response.data.base)
    		this.setState({weather: response.data.main.temp})
    	}).catch((error) => {
    		console.log('error occured: ', error)
    	})
  }

  render() {
    return (
      <div>
       
      <form onSubmit={this.handleSubmit}>
        <p>
      		Temperature: {this.state.weather}
        </p>
        <label>
          Please enter your zip code for the weather:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get my forecast!" />
      </form>
      </div>
    )
  }
}


export default About
