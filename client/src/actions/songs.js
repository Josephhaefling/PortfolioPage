import * as api from '../api';

//Action Creators
//Function that return actions

export const getSongs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSongs()
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.error(error.message)
    }
}

export const createSong = (favorite) => async (dispatch) => {
    try { 
        const { data } = await api.createSong(favorite)

        dispatch({ type: "CREATE", payload: data })
    } catch(error) {
        console.log(error.message)
    }
}