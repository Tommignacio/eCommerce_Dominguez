import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useScroll } from "../hook/useScroll";

export const NavbarHome = () => {
	const scrollY = useScroll();

	const MyNav = styled.nav`
		background-color: ${scrollY ? "black" : "transparent"};
		position: fixed;
		width: 100%;
		height: auto;
		&:hover {
			background-color: black;
		}
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
								<Nav.Link href="#action1">
									{" "}
									<Link to="/summer/remeras" className="nav-link">
										{" "}
										Summer{" "}
									</Link>
								</Nav.Link>
								<Nav.Link href="#action2">
									<Link to="/category/2" className="nav-link">
										Winter{" "}
									</Link>
								</Nav.Link>
								{/* <NavDropdown title="Link" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown> */}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</MyNav>
		</>
	);
};
