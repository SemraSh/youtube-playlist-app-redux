import React from 'react';
import SearchResult from './SearchResult';
import SearchResultContainer from '../containers/SearchResultContainer';

class SearchResults extends React.Component {
	render() {
		return (
			<div>
				<ul className="results-list">
					{this.props.results.map( result => {
						return <SearchResultContainer
							result={result}
							key={result.id.videoId}
						/>;
					})}
				</ul>
			</div>
		);
	}
}

export default SearchResults;
