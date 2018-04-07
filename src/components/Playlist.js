import React from 'react';
import SearchResultContainer from '../containers/SearchResultContainer';

class Playlist extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.activeList.name}</h2>
				{this.props.activeList.videos.map((video) => (
					<SearchResultContainer
						result={video}
						key={video.id.videoId} />
				))}
			</div>
		);
	}
}

export default Playlist;
