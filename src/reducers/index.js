import { combineReducers } from 'redux';
import videoId from './videoId';
import query from './query';
import results from './results';
import lists from './lists';
import activeList from './activeList';
export default combineReducers ({
	videoId,
	query,
	results,
	lists,
	activeList,
});
