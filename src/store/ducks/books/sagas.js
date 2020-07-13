import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSucccesBooks, loadFailureBooks } from './actions';

const jwt = localStorage.getItem('jwt');

export function* loadBooks(action) {
	try {
		const response = yield call(api.get, '/books', { headers: { authorization: `Bearer ${jwt}` }});
		yield put(loadSucccesBooks(response.data));
	} catch (err) {
		yield put(loadFailureBooks());
	}
}