import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarList = () => {
	const MyNav = styled.nav`
		width: 100%;
		height: auto;
		background-color: black;
		position: fixed;
		margin-top: -72px;
		z-index: 999;
	`;

	return (
		<>
			<MyNav>
				<Navbar variant={"dark"} expand="lg">
					<Container fluid>
						<CartWidget />
						<Navbar.Brand>
							<Link to="/" className="nav-link">
								Gentleman
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="me-auto my-2 my-lg-0"
								style={{ maxHeight: "100px" }}
								navbarScroll
							>
								<NavDropdown title="Summer" id="navbarScrollingDropdown">
									<Link
										className="dropdown-item"
										role="button"
										tabinex="0"
										to="/summer/shirt-tshirt"
									>
										T-shrirts & Shrirts
									</Link>
									<Link
										className="dropdown-item"
										role="button"
										tabinex="0"
										to="/summer/jeans-pants"
									>
										Jeans & Pants
									</Link>
									<Link
										className="dropdown-item"
										role="button"
										tabinex="0"
										to="/summer/swim-trunks"
									>
										Swim Trunks
									</Link>
									<NavDropdown.Divider />
									<Link
										className="dropdown-item"
										role="button"
										tabinex="0"
										to="/summer/accesories"
									>
										Accesories
									</Link>
								</NavDropdown>

								<NavDropdown title="Winter" id="navbarScrollingDropdown">
									<Link
										className="dropdown-item"
										role="button"
										tabinex="0"
										to="/winter/sweaters-jackets"
									>
										Sweaters & jackets
									</Link>
									<Link
										className="dropdown-item"
										role="button"
										tabinex="0"
										to="/winter/jeans-joggers"
									>
										Jeans & Joggers
									</Link>
									<Link
										className="dropdown-item"
										role="button"
										tabinex="0"
										to="/winter/hoodie"
									>
										Hoodies
									</Link>
									<NavDropdown.Divider />

									<Link
										className="dropdown-item"
										role="button"
										tabinex="0"
										to="/winter/accesories"
									>
										Accesories
									</Link>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</MyNav>
		</>
	);
};
