import '../../../src/index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {

    return (
        <Navbar fixed='top' expand='lg' className='bg-dark'>
            <Container>
                <Navbar.Brand className='fs-3 fw-semibold text-white'>Metallica</Navbar.Brand>
                <Navbar.Toggle className='me-4' aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='m-auto gap-2 mb-2 mb-lg-auto gap-lg-5 fw-semibold fs-5 text-uppercase'>
                        <NavLink to= '/' className='text-decoration-none text-white d-flex align-items-center'>HOME</NavLink>
                        <NavLink to= '/store' className='text-decoration-none text-white d-flex align-items-center'>STORE</NavLink>
                        <NavLink to= '/about' className='text-decoration-none text-white d-flex align-items-center'>ABOUT</NavLink>
                        <NavLink to= '/contact' className='text-decoration-none text-white d-flex align-items-center'>CONTACT</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;