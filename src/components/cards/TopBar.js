import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const TopBar = () => {
	return (
		<Row>
			<Col className="d-inline-flex">
				<div className="circle">
					<span className="red box"></span>
				</div>
				<div className="circle">
					<span className="yellow box"></span>
				</div>
				<div className="circle">
					<span className="green box"></span>
				</div>
			</Col>
		</Row>
	);
};
