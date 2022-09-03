import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { TopBar } from '../cards/TopBar';
import { ContactName } from '../contacts/ContactName';
import { getUsersAction } from './contactActions';
import './mainBox.css';
export const MainBox = () => {
	const [name, setName] = useState('');
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
						<p className="px-3">Search Bar?</p>
						{userContacts.length
							? userContacts.map((item) => {
									return (
										<div
											className="isContactName mb-2 mt-2"
											onClick={() => setName(item.name)}
										>
											{item.name}
										</div>
									);
							  })
							: ''}
					</Col>
					<Col>{name}</Col>
				</Row>
			</div>
		</div>
	);
};
