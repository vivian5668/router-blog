import React, { Component } from 'react';
const axios = require('axios');

class Home extends Component{
	constructor(props) {
		super(props)
		this.state = {
			shakeSpeare: ''
		}
	}

	componentDidMount() {

		//API url
		let poemApi = 'http://ShakeItSpeare.com/api/poem'

		//***USE FETCH OR AXIOS, PICK ONE

		//fetch the API
		//fetch is build-in in almost anything, no need to import
		//return the response in json format

		//***option 1
		fetch(poemApi)
			.then((response) => {
				return response.json()
			}).then((data) => {
				this.setState({shakeSpeare: data.poem})
			}).catch((error) => {
				console.log('error occurred while parsing! ', error)
			})

		//***option 2
		axios.get(poemApi)
			.then((response) => {
				this.setState({shakeSpeare: response.data.poem})
			}).catch((error) => {
				console.log('error occurred while parsing', error)
			})

		//***option 3
		axios({
				method: 'GET',
				url: poemApi
			}).then((response) => {
				this.setState({shakeSpeare: response.data.poem})
			})
	}



	render() {
		let poetry = this.state.shakeSpeare
		if (this.state.shakeSpeare) {
			return (
				<div>
					<h1> Home </h1>
					<h2> My fav Shakespeare </h2>
					<p>
						{poetry}
					</p>

				</div>
			)} else {
			return (
				<div>
					<h1> Home </h1>
					<h2> My fav Shakespeare </h2>
					<p>
						Loading....
					</p>

				</div>
			)}
	}
		
}

export default Home