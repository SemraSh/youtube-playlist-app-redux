import { connect } from 'react-redux';
import Player from '../components/Player';
//first argument of connect
// mapStateToProps => what is passed from state to props
// react redux is calling that function with the created state
const getVideo = (state) => state.videoId;

const mapStateToProps = (state) => {
	return {	
		videoId: getVideo(state),
	};
};
// second argument of connect
// mapDispatchToProps => passes the actions to the components as props
// react redux calls it with dispatch which is a function which connects actions to reducers 

// the second argument is not needed as Player only gets a prop form state not an action

export default connect(mapStateToProps)(Player);
