import React from 'react';
import {
	MdLocationPin,
	MdLocationCity,
	MdMail,
	MdPerson,
	MdPhoneIphone,
	MdBusiness,
} from 'react-icons/md';
import { FcBusiness, FcBusinessContact, FcGlobe } from 'react-icons/fc';
import './contactDetails.css';
export const ContactDetails = ({ user }) => {
	return (
		<>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<div className="dot d-flex justify-content-center align-items-center text-center">
					{user.name
						.match(/(\b\S)?/g)
						.join('')
						.toUpperCase()
						.replace('.', '')}
				</div>
				<span className="fw-bold mt-2 fs-9">{user.name}</span>
			</div>
			<div className="user-details mt-3">
				<div className="username">
					<span className=" text-muted fw-bold">
						<MdPerson style={{ color: '#8338ec' }} /> /
					</span>
					<span className="">{user.username.toLowerCase()}</span>
				</div>
				<div className="email">
					<span className=" text-muted fw-bold">
						<MdMail style={{ color: '#3a86ff' }} />
					</span>
					<span className=""> {user.email.toLowerCase()}</span>
				</div>
				<div className="location">
					<MdLocationCity style={{ color: '#d90429' }} />
					<span>
						{' '}
						{user.address.suite}
						<span className="text-wrap">{user.address.street}, </span>
					</span>
					<span>{user.address.city}, </span>
					<br />
					<span className="px-4"> {user.address.zipcode}</span>
				</div>
				<div className="geo-cordinates">
					<MdLocationPin style={{ color: '#ef233c' }} /> Long:{' '}
					{user.address.geo.lat} Lat: {user.address.geo.lng}
				</div>
				<div className="phone-number">
					<MdPhoneIphone style={{ color: '#e07a5f' }} /> {user.phone}
				</div>
				<div className="website">
					<FcGlobe /> {user.website}
				</div>
				<div className="company">
					<FcBusinessContact /> {user.company.name}
					<br />
					<span className="px-3 text-muted"> "{user.company.catchPhrase}"</span>
					<br />
				</div>
			</div>
		</>
	);
};
