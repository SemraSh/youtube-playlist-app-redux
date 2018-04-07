import { combineReducers } from 'redux';
import videoId from './videoId';
import query from './query';
import results from './results';
import lists from './lists';
export default combineReducers ({
	videoId,
	query,
	results,
	lists,
});
