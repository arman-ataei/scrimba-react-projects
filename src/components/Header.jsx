import airbnb from '../assets/airbnb.svg'
import   { Navbar, Nav, Form, Button, Row, Col, Image } from 'react-bootstrap';

function Header(){
    return(
      <Navbar className='d-flex justify-content-between header' variant="primary">
      <Navbar.Brand className='mr-auto p-1 ' href="#home"><Image src={airbnb} /></Navbar.Brand>
      {/* <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav> */}
      {/* <Form className='d-flex flex-row'>
          <Form.Control  type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
    )
}












export default Header