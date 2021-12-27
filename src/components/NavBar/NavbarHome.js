import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { useScroll } from "../hook/useScroll";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

export const NavbarHome = () => {
	const scrollY = useScroll();

	const MyNav = styled.nav`
		background-color: ${scrollY ? "black" : "transparent"};
		position: fixed;
		width: 100%;
		height: auto;
		z-index: 999;
		&:hover {
			background-color: black;
		}
	`;

	const MyDiv = styled.div`
		cursor: pointer;
	`;

	return (
		<>
			<MyNav>
				<Navbar variant={"dark"} expand="lg">
					<Container fluid>
						<CartWidget />
						<Navbar.Brand>
							<MyDiv className="nav-link" onClick={() => scroll.scrollToTop()}>
								Old London
							</MyDiv>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="me-auto my-2 my-lg-0"
								style={{ maxHeight: "100px", cursor: "pointer" }}
								navbarScroll
							>
								<LinkScroll
									to="summerSection"
									spy={true}
									smooth={true}
									duration={100}
									className="nav-link"
								>
									Summer
								</LinkScroll>
								<LinkScroll
									to="winterSection"
									spy={true}
									smooth={true}
									duration={100}
									className="nav-link"
								>
									Winter
								</LinkScroll>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</MyNav>
		</>
	);
};
