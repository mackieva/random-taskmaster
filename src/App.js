import './App.css';
import ReactPlayer from 'react-player/youtube';
import { getEpisode } from './assets/util';

import { useRef, useState } from 'react';

function App() {
	const [episode, setEpisode] = useState({});
	const [play, setPlay] = useState(false);
	const [cover, setCover] = useState(false);
	const [started, setStarted] = useState(false);
	const tmPlayer = useRef();

	function handlePause() {
		setPlay(false);
	}

	function handlePlay() {
		setPlay(true);
	}

	function handleNewEp() {
		const newEp = getEpisode();
		setEpisode(newEp);
		if (started === false) {
			setStarted(true);
		}
	}

	function handleSkip() {
		tmPlayer.current.seekTo(26, 'seconds');
	}

	return (
		<div className='tmGradient flex flex-col justify-center items-center w-screen h-screen'>
			<h1 className='tm_heading text-white text-5xl mb-4'>
				Taskmaster Roulette
			</h1>
			<h3 className='tm_heading text-white text-xl mb-6'>{episode.episode}</h3>
			{episode.videoId && (
				<ReactPlayer
					url={episode.videoId}
					playing={play}
					ref={tmPlayer}
					light={cover}
					controls={true}
				/>
			)}
			<div className='flex justify-center gap-5'>
				<button
					className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold w-full hover:cursor-pointer'
					onClick={handleNewEp}
				>
					Gimme an Episode
				</button>
			</div>
			<div
				className={`flex justify-center gap-5 ${
					started ? 'btnHide btnAdded' : 'btnHide'
				}`}
			>
				<button
					className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold hover:cursor-pointe'
					onClick={handlePlay}
				>
					Play
				</button>
				<button
					className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold hover:cursor-pointe'
					onClick={handlePause}
				>
					Pause
				</button>
				<button
					className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold hover:cursor-pointer'
					onClick={handleSkip}
				>
					Skip Intro
				</button>
			</div>
		</div>
	);
}

export default App;
