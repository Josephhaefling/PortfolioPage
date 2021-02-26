import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const FindSong = (title: String) => {
    const dispatch = useDispatch()
    const songs = useSelector((state: any) => state.songs)
    const currentSong = songs.find((song: any) => song.title === title)
    return currentSong
}

export default FindSong
