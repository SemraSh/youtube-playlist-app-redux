import { connect } from 'react-redux';
import SearchResult from '../components/SearchResult';
import { updateVideoId } from '../actions';

const mapStateToProps = (state) =>({});

const mapDispatchToProps = (dispatch) => ({
	updateVideoId: (videoId) => dispatch(updateVideoId(videoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
