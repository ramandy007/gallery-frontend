import React ,{Component}from 'react';
import {Bootstrap,Navbar,Form,Button,Nav,NavDropdown,FormControl,Container} from 'react-bootstrap';
import './navbar.css'

function Navbar1 (){
    
    return (
    <div> 
        <Navbar bg="dark" variant="dark" expand="lg"  >
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            <Button variant="outline-success" className="btn-space">Logout</Button>

          </Form>

          
        </Navbar.Collapse>
      </Navbar>
      
        </div>
        );

}
export default Navbar1;