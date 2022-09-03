import { fetchUsersFromApi } from '../helpers/axiosHelpers.js';
import { setUserContacts } from './contactSlice.js';

export const getUsersAction = () => async (dispatch) => {
	const getAllUserDetails = await fetchUsersFromApi();
	dispatch(setUserContacts(getAllUserDetails));
};
