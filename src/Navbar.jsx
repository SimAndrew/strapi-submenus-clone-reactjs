import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context.jsx';
import NavLinks from './NavLinks.jsx';

function Navbar() {
	const { openSidebar } = useGlobalContext();

	return (
		<nav>
			<div className="nav-center">
				<h3 className="logo">strapi</h3>
				<button className="toggle-btn" onClick={openSidebar}>
					<FaBars />
				</button>

				<NavLinks />
			</div>
		</nav>
	);
}

export default Navbar;
