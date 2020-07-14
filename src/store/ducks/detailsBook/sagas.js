import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSucccesDetailsBook, loadFailureDetailsBook } from './actions';

const jwt = localStorage.getItem('jwt');

export function* loadDetailsBook(action) {
	try {
		const response = yield call(api.get, `/books/${action.payload.id}`, { headers: { authorization: `Bearer ${jwt}` }});
		yield put(loadSucccesDetailsBook(response.data));
	} catch (err) {
		yield put(loadFailureDetailsBook());
	}
}