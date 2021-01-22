import * as api from '../api';

export const getBlogs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs()
        dispatch({ type: "FETCH_BLOGS", payload: data })
    } catch(error) {
        console.error(error.message)
    }
}

export const createBlog = (blog) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(blog)

        dispatch({ type: 'CREATE_BLOG', payload: data })
    } catch(error) {
        console.error(error.message)
    }
}