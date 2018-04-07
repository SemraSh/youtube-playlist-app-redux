import search from '../services/search';

export const updateVideoId = (videoId) => {
	return {
		type: 'UPDATE_VIDEOID',
		videoId,
	};
};

export const updateQuery = (query) => {
	return {
		type: 'UPDATE_QUERY',
		query,
	};
};

const updateResults = (results) => ({
	type: 'SAVE_RESULTS',
	results,
});

export const searchResults = (query) => {
	return (dispatch) => {
		search(query) //imported from services folder
			.then(results => dispatch(updateResults(results.items)));
	};
};

export const addList = (listName) => ({
	type: 'ADD_LIST',
	listName,
});

