import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';
import Search from './Search';
import ListsContainer from '../containers/ListsContainer';

class App extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-8 d-flex justify-content-center">
					<PlayerContainer />
				</div>
				<div className="col-4 d-flex justify-content-center">
					<ListsContainer/>
				</div>
				<div className="col-6 d-flex justify-content-center">
					<Search />
				</div>
			</div>
		);
	}
}

export default App;
