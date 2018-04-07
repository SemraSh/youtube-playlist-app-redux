import React from 'react';
import SearchResultContainer from '../containers/SearchResultContainer';

const SearchResults = ({ results }) => {
	return (
		<div>
			<ul className="results-list">
				{results.map(result => {
					return <SearchResultContainer
						result={result}
						key={result.id.videoId}
					/>;
				})}
			</ul>
		</div>
	);
};

export default SearchResults;
