import API from "../constants/api";
import { apiCall } from "./apiCall";

export const fetchGroupsList = () => {
	return new Promise((resolve, reject) => {
		apiCall(API.GET_ALL_GROUPS)
			.then((response) => resolve(response))
			.catch((error) => reject(error));
	});
};

export const createNewGroup = (name, description, imageUrl, users) => {
	return new Promise((resolve, reject) => {
		const postData = {
			name,
			description,
			imageUrl,
			users,
		};
		apiCall(API.POST_GROUP_DATA, null, postData)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => reject(error));
	});
};
