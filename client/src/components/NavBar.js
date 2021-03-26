import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const NavBar = (props) => {
	useEffect(() => {
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {});
	}, []);

	const navStyle = {
		backgroundColor: "#33B2FF",
	}

	return (
		<>
			<nav style={navStyle}>
				<div className="container">
					<a
						href="/"
						data-target="slide-out"
						className="sidenav-trigger show-on-large"
					>
						<i className="material-icons">Google Books</i>
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to={"/search"}>Search</Link>
						</li>
						<li>
							<Link to={"/saved"}>Saved</Link>
						</li>
					</ul>
				</div>
			</nav>
			<ul className="sidenav" id="slide-out">
				<li>
					<a href="/search">Search</a>
				</li>
				<li>
					<a href="/saved">Saved</a>
				</li>
			</ul>
		</>
	);
};

export default NavBar;