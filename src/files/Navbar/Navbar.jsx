import { NavbarElement } from "./NavbarElement"
import { useRef } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavbarComponent = ({ onScrollToSection }) => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="#">JH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        ></Nav>
                        <Nav className="me-auto">

                            <Nav.Link href="#pricing" onClick={() => onScrollToSection('aboutMe')}>Sobre Mi</Nav.Link>
                            <Nav.Link href="#pricing" onClick={() => onScrollToSection('skill')}>Habilidades</Nav.Link>
                            <Nav.Link href="#pricing" onClick={() => onScrollToSection('projects')}>Proyectos</Nav.Link>
                            <Nav.Link href="#pricing" onClick={() => onScrollToSection('contact')}>Contactar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
export default NavbarComponent;