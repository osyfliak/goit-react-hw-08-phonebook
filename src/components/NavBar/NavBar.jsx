import { UserMenu } from 'components/UserMenu/UserMenu';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selector';

function NavBar() {
  const token = useSelector(selectToken);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Phonebook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {token && (
              <Nav.Link to="/contacts" as={Link}>
                Contacts
              </Nav.Link>
            )}
            {!token && (
              <>
                <Nav.Link to="/signup" as={Link}>
                  Register
                </Nav.Link>
                <Nav.Link to="/login" as={Link}>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
        <UserMenu />
      </Container>
    </Navbar>
  );
}

export default NavBar;
