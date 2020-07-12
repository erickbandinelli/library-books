  
import { all, takeLatest } from 'redux-saga/effects';
import { load } from './users/sagas';

export default function* rootSaga() {
	return yield all([
		takeLatest('LOAD_REQUEST_USERS', load)
	])
}