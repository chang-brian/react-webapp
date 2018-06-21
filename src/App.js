import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			employees: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ employees: users })});
	}

	render() {
		const filteredEmployees = this.state.employees.filter(employee => {
			return employee.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>Employees</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList employees={filteredEmployees} />
			</div>
		);
	}
}

export default App;