import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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
            <NavDropdown.Item className="text" ><Link to="/Menu" className="nav-link" name="Menu" onClick={handler}>
              Menu
            </Link></NavDropdown.Item>
            <NavDropdown.Item className="text">
              <Link to="/Home" className="nav-link" name="Home" onClick={handler}>
                Home
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="text">
              <Link to="/Jobs" className="nav-link" name="Jobs" onClick={handler}>
                Jobs
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="text" href="/Jobs"><Link className="link" to="/Jobs" >
              Jobs
            </Link></Nav.Link>
          <Nav.Link className="text" href="/ContactUs"><Link to="/ContactUs" className="link">
              Contact Us
            </Link></Nav.Link>
          <Nav.Link className="text" href="/About"><Link className="link" to="/About">
              About
            </Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>)
}

export default Header;