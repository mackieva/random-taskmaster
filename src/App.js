import './App.css';
import ReactPlayer from 'react-player/youtube';
import { getEpisode } from './assets/util';

import { useRef, useState } from 'react';

function App() {
	const [episode, setEpisode] = useState({});
	const [play, setPlay] = useState(false);
	const [full, setFull] = useState(0);
	const tmPlayer = useRef();

	// function handlePause() {
	// 	//showPreview()
	// }

	function handleClick() {
		const newEp = getEpisode();
		console.log(newEp);
		setEpisode(newEp);
	}

	function handleSkip() {
		tmPlayer.current.seekTo(26, 'seconds');
	}

	function handleFullScreen() {
		screenfull.request(findDOMNode(tmPlayer.current));
	}

	return (
		<div className='container flex flex-col justify-center items-center w-screen h-screen'>
			<h1 className='tm_heading text-white text-5xl mb-4'>
				Taskmaster Roulette
			</h1>
			<h3 className='tm_heading text-white text-xl mb-6'>{episode.episode}</h3>
			{episode.videoId && (
				<ReactPlayer url={episode.videoId} playing={play} ref={tmPlayer} />
			)}
			<div className='flex gap-5'>
				<button
					className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold'
					onClick={() => setPlay(!play)}
				>
					{play ? 'Pause' : 'Play'}
				</button>
				<button
					className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold'
					onClick={handleSkip}
				>
					Skip Into
				</button>
				<button
					className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold'
					onClick={handleFullScreen}
				>
					Full Screen
				</button>
				<button
					className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold'
					onClick={handleClick}
				>
					Taskmaster Starts Now
				</button>
			</div>
		</div>
	);
}

export default App;
