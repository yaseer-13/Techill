import React, { useRef, useState } from 'react';
import './styles/app.scss';

//adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data';

function App() {
	//ref (null is the starting value here)
	const audioRef = useRef(null);
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLooping, setIsLooping] = useState(false);
	const [isMute, setIsMute] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});

	// Setting the Library State (by default it's false)
	const [libraryStatus, setLibraryStatus] = useState(false);

	/*------------updating the start and end time of the song--------------*/
	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;

		/*-------------Calculate the percentage for animation---------------*/
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round((roundedCurrent / roundedDuration) * 100);

		// : is = [example - currentTime = current]
		setSongInfo({
			...songInfo,
			currentTime: current,
			duration,
			animationPercentage: animation,
		});
	};

	/* --------------------Continuous Playing back to back ---------------- */
	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		if (isPlaying) audioRef.current.play();
	};

	return (
		<div
			// style={{ background: `linear-gradient(to right,  ${currentSong.color[0]},${currentSong.color[1]})` }}
			//adding animation to library
			className={`App ${libraryStatus ? 'library-active' : ''}`}>
			<Nav
				libraryStatus={libraryStatus}
				setLibraryStatus={setLibraryStatus}
			/>
			{/* currentSong can be named anything and the one in the {} is the state "currentSongs" */}
			<Song currentSong={currentSong} />

			<Player
				audioRef={audioRef}
				setIsPlaying={setIsPlaying}
				isPlaying={isPlaying}
				currentSong={currentSong}
				setSongInfo={setSongInfo}
				songInfo={songInfo}
				songs={songs}
				setCurrentSong={setCurrentSong}
				setSongs={setSongs}
				isLooping={isLooping}
				setIsLooping={setIsLooping}
				isMute={isMute}
				setIsMute={setIsMute}
			/>

			<Library
				audioRef={audioRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>

			<audio
				onLoadedMetadata={timeUpdateHandler}
				onTimeUpdate={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={songEndHandler}></audio>
		</div>
	);
}

export default App;
