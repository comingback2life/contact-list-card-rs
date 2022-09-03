import React from 'react';
import { FaHeartBroken, FaSadTear } from 'react-icons/fa';
const ErrorNotFound = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center vh-100">
			<h1>
				<FaHeartBroken className="FaHeartBroken" />
			</h1>

			{
				// The CSS for this in App.css since I only needed one line
			}
			<p className="lead text-light">Error</p>
			<p className="lead text-light">
				Sorry, not found <FaSadTear />{' '}
			</p>
		</div>
	);
};

export default ErrorNotFound;
