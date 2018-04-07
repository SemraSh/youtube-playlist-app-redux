import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { addVideoToPlaylist } from '../actions';

const getResults = (state) => state.results;
const mapStateToProps = (state) => (
	{
		results: getResults(state),
	});
const mapDispatchToProps = (dispatch) =>({
	addVideoToPlaylist: (video) => dispatch(addVideoToPlaylist(video)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
