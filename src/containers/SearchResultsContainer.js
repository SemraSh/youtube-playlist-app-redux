import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';

const getResults = (state) => state.results;
const mapStateToProps = (state) => (
	{
		results: getResults(state),
	});

export default connect(mapStateToProps)(SearchResults);
