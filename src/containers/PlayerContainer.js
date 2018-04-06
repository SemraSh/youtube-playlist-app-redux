import { connect } from 'react-redux';
import Player from '../components/Player';

const getVideoId = (state) => state.videoId;
const mapStateToProps = (state) => ({
	videoId: getVideoId(state),
});

export default connect(mapStateToProps, {})(Player);
