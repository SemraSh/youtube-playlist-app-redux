import { connect } from 'react-redux';
import Playlist from '../components/Playlist';

const getActiveList = (state) => state.lists.find((list) => list.name === state.activeList);

const mapStateToProps = (state) => ({
	activeList: getActiveList(state),
});

export default connect(mapStateToProps)(Playlist);
