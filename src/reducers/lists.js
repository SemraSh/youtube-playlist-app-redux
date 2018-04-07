const defaultList = [
	{
		name: 'my list',
		videos: [],
	},
];
const addNewList = (state, listName) => {
	const newList = {
		name: listName,
		videos: [],
	};
	return [ ...state, newList ];
};

const lists = (state = defaultList, action) => {
	switch (action.type) {
		case 'ADD_LIST':
			return addNewList(state , action.listName);
		default: return state;
	}
};

export default lists;
