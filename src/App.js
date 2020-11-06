import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/Menu"
import DISHES from "./shared/dishes";
import { useState } from 'react';

function App(props) {
	const [dishes, changeDished] = useState(DISHES);

	return (
		<div>

			<Navbar dark color="primary">
				<div className="container">
					<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
				</div>
			</Navbar>

			<Menu dishz={dishes} />
			
		</div>
	);
}

export default App;
