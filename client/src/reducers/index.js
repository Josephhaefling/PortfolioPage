import { combineReducers } from 'redux';

import favorites from './favorites';
import blogs from './blogs';
import songs from './songs';

export default combineReducers({
    favorites,
    blogs,
    songs
})