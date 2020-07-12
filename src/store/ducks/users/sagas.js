import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSucccesUsers, loadFailureUsers } from './actions';

export function* load(action) {
	try {
		const response = yield call(api.post, '/auth/login', action.payload.formData);
		yield put(loadSucccesUsers(response.data));
	} catch (err) {
		yield put(loadFailureUsers());
	}
}