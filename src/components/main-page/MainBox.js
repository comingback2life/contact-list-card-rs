import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from '../cards/SearchBar';
import { TopBar } from '../cards/TopBar';
import { ContactDetails } from '../contacts/ContactDetails';
import { LoaderComponent } from '../loader-comps/LoaderComponent';
import { NoContactCardClicked } from '../loader-comps/NoContactCardClicked';
import { getUsersAction } from './contactActions';
import './mainBox.css';
export const MainBox = () => {
	const { userContacts, isLoading } = useSelector(
		(state) => state.userContacts
	);
	const [userContactLocal, setUserContactLocal] = useState({});
	const [userDetails, setUserDetails] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersAction());
	}, []);

	const handleOnChange = (e) => {
		const { value } = e.target;
		setUserContactLocal(
			userContacts.filter((item) =>
				item.name.toUpperCase().includes(value.toUpperCase())
			)
		);
		if (userContactLocal.length < 1) {
			setUserContactLocal({});
		}
	};

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			{isLoading ? (
				<LoaderComponent />
			) : (
				<div className="card">
					<TopBar />
					<div className="px-2">
						<SearchBar>
							<input
								type="text"
								class="searchbar-input"
								onChange={handleOnChange}
							/>
						</SearchBar>
					</div>
					<Row>
						<Col xs={4} className="isContactCard mt-2">
							{userContactLocal.length
								? userContactLocal.map((item) => {
										return (
											<div
												className="isContactName mb-2 mt-2"
												onClick={() => setUserDetails(item)}
											>
												{item.name}
											</div>
										);
								  })
								: userContacts.map((item) => {
										return (
											<div
												className="isContactName mb-2 mt-2"
												onClick={() => setUserDetails(item)}
											>
												{item.name}
											</div>
										);
								  })}
						</Col>
						<Col className="containsUserDetails mb-3">
							{!userDetails.name ? (
								<NoContactCardClicked />
							) : (
								<ContactDetails user={userDetails} />
							)}
						</Col>
					</Row>
				</div>
			)}
		</div>
	);
};
