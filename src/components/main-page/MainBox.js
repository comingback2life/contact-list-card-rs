import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from '../cards/SearchBar';
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

	const handleOnChange = (e) => {
		const { value } = e.target;
	};

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			{userContacts?.length >= 1 ? (
				<div className="card">
					<TopBar />
					<div className="px-2">
						<SearchBar>
							<input
								type="text"
								class="searchbar-input"
								maxlength="2048"
								name="query"
								autocapitalize="off"
								autocomplete="off"
								title="Search"
								placeholder="Search"
								onChange={handleOnChange}
							/>
						</SearchBar>
					</div>
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
						<Col className="containsUserDetails mb-3">
							{userDetails.name && <ContactDetails user={userDetails} />}
						</Col>
					</Row>
				</div>
			) : (
				<div className="text-light">Loading contacts...</div>
			)}
		</div>
	);
};
