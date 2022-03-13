import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause, faVolumeUp, faVolumeMute, faSync, faBan } from '@fortawesome/free-solid-svg-icons';


const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setCurrentSong, id, setSongs, muted, isLooping, setIsLooping, isMute, setIsMute }) => {

    const activeLibraryHandler = (nextPrev) => {
        //adding active state to the selected song
        const newSongs = songs.map((song) => {
            //check the nextPrev id which been clicked is same as the state id
            if (song.id === nextPrev.id) {
                //if true, return the whole song and change the active state to true
                return { ...song, active: true };
            } else {
                //if false, return the whole song and change the active state to false
                return { ...song, active: false };
            }
        });
        setSongs(newSongs);
    };

    /*-----------------------Event handlers---------------------*/
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            //setting the opposite of current state,if play then pause 
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            //setting the opposite of current state,if pause then play 
            setIsPlaying(!isPlaying);
        }
    };

    /*--------------formatting the time in minutes and seconds---------*/
    const getTime = (time) => {
        return (
            //converting the time to minutes and seconds
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    /*-----------------------dragging the range slider-------------*/
    const dragHandler = (e) => {
        //setting the current time of the song to the value of the slider
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    /*-----------------------Skipping back and forward-------------*/
    const skipTrackHandler = async (direction) => {
        // getting the index of the current song
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
            /*  % (mod symbol is used reset the index to 0 if it is 
                greater than the amount of songs present in the array)*/
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler((currentIndex + 1) % songs.length);
        }
        if (direction === "skip-back") {
            /* if current index is -1 & songs.length is === -1 then set 
            current song to songs.length - 1*/
            if ((currentIndex - 1) % songs.length === -1) {
                /* set current song to songs.length - 1(in this case total 
                    no.of songs are 10,then songs.length-1 = (10-1) = 9) & 
                    setting songs to the last one, which is => songs[9]*/
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();
                /* if dont add return, the below line will be executed 
                it would the crash the website */
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        //check if the song is playing
        if (isPlaying) audioRef.current.play();
    };

    /* --------------------progress bar ANIMATION------------------------*/
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    };

    /*--------------------------LOOPing THE CURRENT SONG ---------------------------*/
    const loopSong = () => {
        if (!isLooping) {
            // if looping is false, then set looping to true
            audioRef.current.loop = true;
            setIsLooping(true);
        }
        else {
            audioRef.current.loop = false;
            setIsLooping(false);
        }
    };

    /*--------------------------Mute Btn---------------------------*/
    const muteAudio = () => {
        //if the volume is 0, then set it to 1
        if (isMute) {
            audioRef.current.muted = false;
            setIsMute(!isMute);
        }
        else {
            audioRef.current.muted = true;
            setIsMute(!isMute);
        }
    };

    /*-----------------------rendering the component---------------------*/
    return (
        <div className="player">
            <div className="time-control">

                <p>{getTime(songInfo.currentTime)}</p>

                <div
                    style={{ background: `linear-gradient(to right,  ${currentSong.color[0]},${currentSong.color[1]})` }}
                    className="track">

                    <input min={0} onChange={dragHandler} max={songInfo.duration} value={songInfo.currentTime} type="range" />
                    <div style={trackAnim} className="animate-track"></div>
                </div>

                {/* fixing (duration) NaN Glitch using ternary statement */}
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>

            <div className="play-control">
                {/* skip-back btn */}
                <FontAwesomeIcon className="btn-icon" onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
                {/* play btn*/}
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                {/* skip-forward btn*/}
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight} />
                <FontAwesomeIcon onClick={muteAudio} size="2x" icon={isMute ? faVolumeUp : faVolumeMute} />
                <FontAwesomeIcon onClick={loopSong} size="2x" icon={isLooping ? faBan : faSync} />
            </div>

        </div>
    );
};

export default Player;