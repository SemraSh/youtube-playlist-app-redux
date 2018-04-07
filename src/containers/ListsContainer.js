import { connect } from 'react-redux';
import Lists from '../components/Lists';
import { addList } from '../actions';

const getLists = (state) => state.lists;
const mapStateToProps = (state) => ({
	lists: getLists(state),
});

const mapDispatchToProps = (dispatch) => ({
	addList: (listName) => dispatch(addList(listName)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Lists);
