import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/icon.png';
import { useState } from 'react';
import '../componentscss/Header.css';


function Header() {

  const [value, setValue] = useState('Home');

  function handler(e) {
    setValue(e.target.name)
  }
  return (<>
    <Navbar bg="dark" data-bs-theme="dark" className='Navbar'>
      <Container className='HeaderBar'>
        <img src={logo} alt="Logo" className='logo' />
        <Navbar.Brand className="text" href="#home">devotiontocode</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown className="text"
            title={value}
          >
            <NavDropdown.Item className="text" href="/Jobs" name="Menu" onClick={handler}>Menu</NavDropdown.Item>
            <NavDropdown.Item className="text" href="/Home" name='Home' onClick={handler}>
              Home
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="text" href="/Jobs" name='Jobs' onClick={handler}>
              Jobs
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="text" href="/ContactUs">contact us</Nav.Link>
          <Nav.Link className="text" href="/About">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>)
}

export default Header;