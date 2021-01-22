import { combineReducers } from 'redux';

import favorites from './favorites';
import blogs from './blogs';

export default combineReducers({
    favorites,
    blogs,
})