import axios from 'axios';
import favorites from '../reducers/favorites';
import blogs from '../reducers/blogs';
import songs from '../reducers/songs';

const url = "http://localhost:5000/favorites"


export const fetchFavorites = () => axios.get(url)

export const createFavorite = (newFavorite) => axios.post(url, newFavorite)

export const fetchBlogs = () => axios.get(url)

export const createBlog = (newBlog) => axios.post(url, newBlog)

export const fetchSongs = () => axios.get(url)

export const createSong = (newSong) => axios.post(url, newSong)