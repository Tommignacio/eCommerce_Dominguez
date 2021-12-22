import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarBootstrap = () => {
	return (
		<>
			<Navbar bg="dark" variant={"dark"} expand="lg">
				<Container fluid>
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
								<Link to="/summer/shirt-tshirt" className="nav-link">
									{" "}
									Summer{" "}
								</Link>
							</Nav.Link>
							<Nav.Link href="#action2">
								<Link to="/winter/2" className="nav-link">
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
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
							<CartWidget />
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarBootstrap;
