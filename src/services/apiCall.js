import { API_BASE_URL } from "./../constants/api";
import axios from "axios";

const getApiObject = (apiInfo, params, data) => {
	const apiObj = {
		baseURL: API_BASE_URL,
		data,
		method: apiInfo.method,
		params,
		url: apiInfo.name,
	};
	return apiObj;
};

export const apiCall = (apiInfo, params, data) => {
	const axiosObj = getApiObject(apiInfo, params, data);
	let apiURL = axiosObj.url || "";
	if (axios.method === "GET" && params) apiURL = apiURL + "?" + params;
	return new Promise((resolve, reject) => {
		axios(apiURL, axiosObj)
			.then((response) => resolve(response))
			.catch((error) => reject(error));
	});
};
