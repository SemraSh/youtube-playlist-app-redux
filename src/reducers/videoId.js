const videoId = (state = 'xsSnOQynTHs', action) => {
	switch (action.type) {
		case 'UPDATE_VIDEOID':
			return action.videoId;
		default: return state;
	}
};

export default videoId;
