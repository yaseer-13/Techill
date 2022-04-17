/**
 * /*This the top part of the app which just shows the song, song name,artist and
 * a picture of the song
 *
 *
 */

import React from 'react';

const Song = ({ currentSong }) => {
	return (
		<div className='song-container'>
			<img alt={currentSong.name} src={currentSong.cover}></img>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;
