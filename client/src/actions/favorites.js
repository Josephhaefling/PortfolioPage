import * as api from '../api';

//Action Creators
//Function that return actions

export const getFavorites = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFavorites()
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.error(error.message)
    }
}

export const createFavorite = (favorite) => async (dispatch) => {
    try { 
        const { data } = await api.createFavorite(favorite)

        dispatch({ type: "CREATE", payload: data })
    } catch(error) {
        console.log(error.message)
    }
}