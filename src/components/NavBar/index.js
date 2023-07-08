import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'
import './index.css'

function NavigationBar() {
  const navigate = useNavigate()
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <Navbar expand='md' className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand href="/">
            <img src='https://res.cloudinary.com/dexzw88rk/image/upload/v1687688369/PicsArt_03-19-07.18.18_yru54j.png' alt='logo' className='logo' />
            Money Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/add-transaction">Add Transaction</Nav.Link>
              <Button className='logout-button' variant="primary" onClick={onClickLogout}>Logout</Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavigationBar