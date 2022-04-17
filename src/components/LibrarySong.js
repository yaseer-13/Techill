import React from 'react';

const LibrarySong = ({
	song,
	songs,
	setCurrentSong,
	id,
	audioRef,
	isPlaying,
	setSongs,
}) => {
	const songSelectHandler = async () => {
		await setCurrentSong(song);

		//adding active state to the selected song
		const newSongs = songs.map((song) => {
			//check the id which been clicked is same as the state id
			if (song.id === id) {
				//if true, return the whole song and change the active state to true
				return { ...song, active: true };
			} else {
				//if false, return the whole song and change the active state to false
				return { ...song, active: false };
			}
		});
		setSongs(newSongs);

		//check if the song is playing
		if (isPlaying) audioRef.current.play();
	};

	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.active ? 'selected' : ' '}`}>
			<img alt={song.name} src={song.cover}></img>
			<div className='song-description'>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
