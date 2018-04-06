import SearchBar from '../components/SearchBar'
import {connect} from 'react-redux'

const getQuery = (state) => state.query

const mapStateToProps = (state) => ({
  query: getQuery(state)
})

export default connect()(SearchBar)