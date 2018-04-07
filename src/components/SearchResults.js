import React from 'react';
import SearchResultContainer from '../containers/SearchResultContainer';

const SearchResults = ({ results, addVideoToPlaylist }) => {
	return (
		<div>
			<ul className="results-list">
				{results.map(result => (
					<div>
						<SearchResultContainer
							result={result}
							key={result.id.videoId}
						/>
						<button onClick={e => addVideoToPlaylist(result)}>Add</button>
					</div>
				))}
			</ul>
		</div>
	);
};

export default SearchResults;
