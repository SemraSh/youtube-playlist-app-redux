import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import { updateQuery, searchResults } from '../actions';

const getQuery = (state) => state.query;

const mapStateToProps = (state) => ({
	query: getQuery(state),
});

const mapDispatchToProps = (dispatch) => ({
	updateQuery: query => dispatch(updateQuery(query)),
	searchResults: query => dispatch(searchResults(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
