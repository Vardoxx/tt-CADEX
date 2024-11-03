import YouTube from 'react-youtube'
import { IVideo } from '../types/responseVideo.types'

const VideoPlayer: React.FC<IVideo> = ({ videoId, className }) => {
	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
			controls: 1,
		},
	}

	return (
		<div className={className}>
			<YouTube videoId={videoId} opts={opts} />
		</div>
	)
}

export default VideoPlayer
