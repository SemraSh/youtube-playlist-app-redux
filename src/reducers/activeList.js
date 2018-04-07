const activeList = (state = 'my list', action) => {
	switch (action.type) {
		case 'ACTIVATE_LIST':
			return action.activeList;
		default: return state;
	}
};

export default activeList;
