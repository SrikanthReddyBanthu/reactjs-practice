import React, {Component} from 'react';


// Class based declaration

class Header extends Component {
	render(){
		return(
			<div>
				<header>
					<h1 className="logo">Welcome to first application</h1>
					<h2>Logo</h2>
				</header>
			</div>

		)
	}
}

export default Header;

/*
// Functional based declaration
const Header = () => {
	return (
		<h1>Logo</h1>
	)
}
*/
