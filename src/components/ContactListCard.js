import React from 'react';
import { useSelector } from 'react-redux';
export const ContactListCard = () => {
	const users = useSelector((state) => state.userContacts);
	console.log(users);
	return <div>ContactListCard</div>;
};
