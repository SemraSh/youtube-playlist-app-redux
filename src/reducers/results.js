const results = (state = [], action ) => {
	switch (action.type) {
		case 'SAVE_RESULTS':
			return action.results; 
		default: return state;
	}
};

export default results;
