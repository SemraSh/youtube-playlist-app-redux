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

const addToPlaylist = (state, video, listName) =>{
	return state.map((list)=>{
		if (list.name !== listName) return list; 
		const newVideos = [ video , ...list.videos ];
		return Object.assign({}, list, { videos: newVideos });
	});
};

const lists = (state = defaultList, action) => {
	switch (action.type) {
		case 'ADD_LIST':
			return addNewList(state , action.listName);
		case 'ADD_VIDEO_TO_PLAYLIST':
			return addToPlaylist(state, action.video, action.listName);
		default: return state;
	}
};

export default lists;
