import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgimage from '../logo.png';
import '../CSS/Navbar.css'
// Image does not load: line 17

function MyNavBar() {
  return (
    <Navbar bg='dark' expand="lg" className='nav'>
      <Container fluid>
        <Navbar.Brand href="#" className=''>   
          <img
              alt=""
              width="80%"
              src= {bgimage}
              className="d-inline-block"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>PRODUCTS</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>BIOZYME WHEY</Nav.Link>
            <Nav.Link href="#action3" className='text-white'><img src=''/>LWL</Nav.Link>
            <Nav.Link href="#action4" className='text-white'>LEVEL ONE SPORTS</Nav.Link>
            <Nav.Link href="#action5" className='text-white'>10 YEARS OF ZIDD</Nav.Link>
            <Nav.Link href="#action6" className='text-white'>FIT FOODS</Nav.Link>
            <Nav.Link href="#action7" className='text-white'>AUTHENTICITY</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;