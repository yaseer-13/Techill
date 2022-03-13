import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {

    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {/* looping over each song to a create Library Component */}
                {songs.map(song => (

                    <LibrarySong
                        audioRef={audioRef}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        song={song} id={song.id}
                        key={song.id}
                        isPlaying={isPlaying}
                        setSongs={setSongs} />
                ))}
            </div>
        </div>
    );
};

export default Library;