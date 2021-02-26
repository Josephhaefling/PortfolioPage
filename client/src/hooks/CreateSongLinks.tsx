import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSongs } from '../actions/songs'

//images
import Record from '../assets/record-image.jpeg';

import Button from '../components/Button/button';



const SongLinks = () => {

    const dispatch = useDispatch()
    const songs = useSelector((state: any) => state.songs)

    const songLinks = songs.map((song: any) => {
        const { title, url } = song
        return (
            <Button type={title} src={Record} url={url} key={url} />
        )
    })

    useEffect(() => {
        dispatch(getSongs())
  }, [dispatch])

    
    return songLinks
}

export default SongLinks