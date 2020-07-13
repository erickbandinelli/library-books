
export const loadRequestBooks = () => {
	return {
		type: "LOAD_REQUEST_BOOKS"
	}
}

export const loadSucccesBooks = (data) => {
	return {
		type: "LOAD_SUCCCES_BOOKS",
		payload: data
	}
}

export const loadFailureBooks = () => {
	return {
		type: "LOAD_FAILURE_BOOKS"
	}
}