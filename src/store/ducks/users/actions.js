
export const loadRequestUsers = (formData) => {
	return {
		type: "LOAD_REQUEST_USERS",
		payload: { formData }
	}
}

export const loadSucccesUsers = (data) => {
	return {
		type: "LOAD_SUCCCES_USERS",
		payload: data
	}
}

export const loadFailureUsers = () => {
	return {
		type: "LOAD_FAILURE_USERS"
	}
}