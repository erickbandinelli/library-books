const INITIAL_STATE = {
	data: [],
	error: false,
	loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOAD_REQUEST_USERS':
			return {
				...state,
				loading: true
			};
		case 'LOAD_SUCCCES_USERS':
			if (action.payload.status === 200) {
				localStorage.setItem('jwt', action.payload.access_token);
			}

			window.location.href = "http://localhost:3000/list-books";
			break;
		case 'LOAD_FAILURE_USERS':
			return {
				...state,
				loading: false,
				error: true,
				data: []
			};
		default:
			return state;
	}
};

export default reducer;