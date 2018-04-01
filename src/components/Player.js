import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.Component {

	componentDidMount() {
		window.onYouTubeIframeAPIReady = () => {
			this.player = new YT.Player('player', {
				height: '390',
				width: '640',
				videoId: this.props.videoId,
				// events: {
				// 	onStateChange: this.onPlayerStateChange,
				// },
			});
		};
	}

	// onPlayerStateChange = ( event ) => {

	// }

	componentWillReceiveProps(nextProps) {
		const { videoId } = nextProps;
		if (videoId !== this.props.videoId) {
			this.player.loadVideoById( videoId );
		}
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div>
				<div id="player"></div>
			</div>
		);
	}
};

export default Player;
