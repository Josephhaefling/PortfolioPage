import axios from 'axios';

const url = "http://localhost:5000/favorites"

export const fetchFavorites = () => axios.get(url)

export const createFavorite = (newFavorite) => axios.post(url, newFavorite)

export const fetchBlogs = () => axios.get(url)

export const createBlog = (newBlog) => axios.post(url, newBlog)