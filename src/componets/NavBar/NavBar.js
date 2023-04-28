import CartWidget from "../CartWidget/CartWidget"
import {Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Essent</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Nosotros</Nav.Link>
              <Nav.Link href="#link">Catalogo</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget/>
      </Navbar>
    )
}

export default NavBar