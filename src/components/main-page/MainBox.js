import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { TopBar } from '../cards/TopBar';
import { ContactName } from '../contacts/ContactName';
import { getUsersAction } from './contactActions';
import './mainBox.css';
export const MainBox = () => {
	const [name, setName] = useState({});
	const [localContacts, setLocalContacts] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersAction());
	}, []);

	const { userContacts } = useSelector((state) => state.userContacts);
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<Row className="card">
				<TopBar />
				<Row>
					<Col xs={4} className="isContactCard">
						{userContacts.length
							? userContacts.map((item) => {
									return (
										<>
											<ContactName
												name={item.name}
												onClick={() => setName(item)}
											>
												{item.name}
											</ContactName>
										</>
									);
							  })
							: ''}
					</Col>

					<Col>{console.log(name)}</Col>
				</Row>
			</Row>
		</div>
	);
};
