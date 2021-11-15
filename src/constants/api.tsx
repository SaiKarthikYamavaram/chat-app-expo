export const API_BASE_URL =
	"https://nenu1.herokuapp.com";

const API = {
	GET_ALL_GROUPS: {
		method: "GET",
		name: "/groups",
	},
	POST_GROUP_DATA: {
		method: "POST",
		name: "/add/group",
	},
	GET_GROUP_DETAILS: {
		method: "GET",
		name: "/search",
	},
};

export default API;
