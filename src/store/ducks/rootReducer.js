import { combineReducers } from 'redux';

import Users from './users';
import Books from './books';
import DetailsBook from './detailsBook';

export default combineReducers({
	Users,
	Books,
	DetailsBook
})