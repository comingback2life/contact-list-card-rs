import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from './main-page/contactActions';
export const ContactListCard = () => {
	const dispatch = useDispatch();
	dispatch(getUsersAction());
	return <div>ContactListCard</div>;
};
