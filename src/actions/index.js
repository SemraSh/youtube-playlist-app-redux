export const updateVideoId = (videoId) => {
	return {
		type: 'UPDATE_VIDEO_ID',
		videoId,
	};
};

export const updateQuery = (query) => {
	return {
		type: 'UPDATE_QUERY',
		query,
	};
};
