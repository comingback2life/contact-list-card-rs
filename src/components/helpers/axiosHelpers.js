import axios from 'axios';
const APIEndPoint = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsersFromApi = async () => {
	try {
		const result = await axios.get(APIEndPoint); //get data from API endPoint
		return result.data;
	} catch (error) {
		return;
	}
};
