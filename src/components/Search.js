import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import search from '../services/search';

class Search extends React.Component {
	state = {
		query: '',
		results: [],
	};


	handleChange = (event) => {
		this.setState({
			query: event.target.value,
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		search(this.state.query)
			.then(results => {
				this.setState({
					results: results.items,
				});
			});
	}

	render() {
		return (
			<div>
				<SearchBar
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					query={this.state.query}
				/>
				<SearchResults
					results={this.state.results}
				/>
			</div>
		);
	}
};

export default Search;
