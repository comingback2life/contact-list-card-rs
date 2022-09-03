import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { TopBar } from '../cards/TopBar';
import { ContactDetails } from '../contacts/ContactDetails';
import { getUsersAction } from './contactActions';
import './mainBox.css';
export const MainBox = () => {
	const { userContacts } = useSelector((state) => state.userContacts);
	const [userDetails, setUserDetails] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersAction());
	}, []);

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			{userContacts?.length > 1 ? (
				'Card'
			) : (
				<div className="text-light">Hello</div>
			)}
			<div className="card">
				<TopBar />
				<Row>
					<Col xs={4} className="isContactCard mt-2">
						{userContacts.length ? (
							userContacts.map((item) => {
								return (
									<div
										className="isContactName mb-2 mt-2"
										onClick={() => setUserDetails(item)}
									>
										{item.name}
									</div>
								);
							})
						) : (
							<div className="text-center">Loading contacts...</div>
						)}
					</Col>
					<Col className="containsUserDetails">
						{userDetails.name && <ContactDetails user={userDetails} />}
					</Col>
				</Row>
			</div>
		</div>
	);
};
