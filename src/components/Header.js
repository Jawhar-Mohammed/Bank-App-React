import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link
						style={{ textDecoration: "none", color: "white" }}
						to="/accounts"
					>
						Bank App  BCP
					</Link>
				</Navbar.Brand>

				<Navbar.Brand>
					<Link
						style={{ textDecoration: "none", color: "blue" }}
						to="/accounts"
					>
						PM App  BCP
					</Link>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default Header;
