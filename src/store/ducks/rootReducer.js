import { combineReducers } from 'redux';

import Users from './users';
import Books from './books';

export default combineReducers({
	Users,
	Books
})