import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { TopBar } from '../cards/TopBar';
import { getUsersAction } from './contactActions';
import './mainBox.css';
export const MainBox = () => {
	const [name, setName] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersAction());
	}, []);

	const { userContacts } = useSelector((state) => state.userContacts);
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="card">
				<TopBar />
				<Row>
					<Col xs={4} className="isContactCard mt-2">
						{userContacts.length ? (
							userContacts.map((item) => {
								return (
									<div
										className="isContactName mb-2 mt-2"
										onClick={() => setName(item)}
									>
										{item.name}
									</div>
								);
							})
						) : (
							<div className="text-center">Loading contacts...</div>
						)}
					</Col>
					<Col>{name.length > 1 ? 'Hello' : 'No Hello'}</Col>
				</Row>
			</div>
		</div>
	);
};
