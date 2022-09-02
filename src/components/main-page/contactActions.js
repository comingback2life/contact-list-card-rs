import { fetchUsersFromApi } from '../helpers/axiosHelpers';
import { setUserContacts } from './contactSlice';

const getUsersAction = () => async (dispatch) => {
	const getAllUserDetails = await fetchUsersFromApi();
	dispatch(setUserContacts(getAllUserDetails));
};
