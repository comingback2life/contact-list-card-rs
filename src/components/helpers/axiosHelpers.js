import axios from 'axios';
const APIEndPoint = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsersFromApi = async () => {
	try {
		const result = axios.get(APIEndPoint);
		return result;
	} catch (error) {
		console.log(error);
	}
};
