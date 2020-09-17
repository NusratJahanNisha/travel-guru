import React from 'react';
import { Navbar, Form, FormControl, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{marginBottom: '50px'}}>
            <Navbar expand="lg">
                <Navbar.Brand href="#logo">
                    <img style={{ height: '70px', width: '140px' }} src="https://i.ibb.co/QMTsgBw/Logo.png" alt="" />
                </Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                       
                        <Link to="/home">  <Button style={{margin:'3px'}} variant="light">News</Button></Link>
                        <Link to="/home">  <Button style={{margin:'3px'}} variant="light">Destination</Button></Link>
                        <Link to="/home">  <Button style={{margin:'3px'}} variant="light">Blog</Button></Link>
                        <Link to="/home">  <Button style={{margin:'3px'}} variant="light">Contact</Button></Link>
                        <Link to="/login">  <Button style={{margin:'3px'}} variant="warning">Login</Button></Link>
                      
                        
                        
                        
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;