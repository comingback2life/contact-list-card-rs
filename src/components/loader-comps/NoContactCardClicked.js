import santaLogo from '../../assets/santaClaus.png';
import './loaderComps.css';
export const NoContactCardClicked = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<img src={santaLogo} className="isSanta" alt="santaLogo" />
			<p className="text-lead fs-4">Hey!</p>
			<p className="text-muted">
				Santa tells me, you haven't clicked on a name
			</p>
			<p className="text-muted">Please click on a name to get started</p>
			<p className="text-lead">and the magic happens...</p>
		</div>
	);
};
