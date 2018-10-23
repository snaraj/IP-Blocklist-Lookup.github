import React, { Component } from 'react';
import './App.css';
import Tittle from './components/Tittle/Tittle';
import Searchbox from './components/Searchbox/Searchbox';
import Displaybox from './components/Displaybox/Displaybox';
import Scroll from './components/Scroll/Scroll';

class App extends Component {
	
	constructor() {
		super()
		this.state = {
			ips: [],
			searchfield: '',
			limit: 50,
		}
	}
	
	componentDidMount() {
		fetch('http://localhost:3000/').then(response => {
			return response.json();
		}).then(ip => {
			this.setState({ips: ip})
		})
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	handleLimitChange = (e) => {
		this.setState({ limit: Number(e.target.value) });
	}

	render() {
    	if(this.state.ips.length === 0) {
      			return <h1>Loading...</h1>		
      	} else {
      		return (
	 			<div>
	  				<Tittle />
	  				<Searchbox searchChange={this.onSearchChange}/>
	  				<div className='select'>
	  					<select onChange={this.handleLimitChange}>
	  						<option value="50">50</option>
	  						<option value="100">100</option>
	  						<option value="200">200</option>
	  					</select>
	  				</div>
	  				<Scroll>
	  					<Displaybox limit={this.state.limit} searchFilter={this.state.searchfield} ips = {this.state.ips}/>
	  				</Scroll>
				</div>
    		);
      	}
    }
}

export default App;
