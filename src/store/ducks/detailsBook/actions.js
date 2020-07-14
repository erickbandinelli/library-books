export const loadRequestDetailsBook = (id) => {
	return {
		type: "LOAD_REQUEST_DETAILS_BOOK",
		payload: { id }
	}
}

export const loadSucccesDetailsBook = (data) => {
	return {
		type: "LOAD_SUCCCES_DETAILS_BOOK",
		payload: data
	}
}

export const loadFailureDetailsBook = () => {
	return {
		type: "LOAD_FAILURE_DETAILS_BOOK"
	}
}

