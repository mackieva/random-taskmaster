import './App.css';
import ReactPlayer from 'react-player/youtube';
import { getEpisode } from './assets/util';
import { useState } from 'react';

function App() {
	const [episode, setEpisode] = useState({});

	function handleClick() {
		const newEp = getEpisode();
		console.log(newEp);
		setEpisode(newEp);
	}

	return (
		<div className='container flex flex-col justify-center items-center w-screen h-screen'>
			<h1 className='tm_heading text-white text-5xl mb-6'>
				Taskmaster Roulette
			</h1>
			{episode.videoId && <ReactPlayer url={episode.videoId} />}
			<button
				className='bg-white px-7 py-3 mt-6 rounded text-xl font-bold'
				onClick={handleClick}
			>
				Now
			</button>
		</div>
	);
}

export default App;
