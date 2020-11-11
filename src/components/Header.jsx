import React from "react";
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
    const [isNavOpen, setOpen] = React.useState(false);
    const [isModalOpen, setModalOpen] = React.useState(false);

    function handleLogin(event) {
        setModalOpen(false);
        alert("Username: " + event.target.username.value + "\npassword: " + event.target.password.value +
            "\nchecked: " + event.target.remember.value);
        event.preventDefault();
    }

    return (
        <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={() => { setOpen(!isNavOpen) }} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" alt="logo" height="30" width="41" />
                    </NavbarBrand>
                    <Collapse navbar isOpen={isNavOpen} > {/* to collapse for smaller */}
                        <Nav navbar className="ml-3 mr-3">
                            <NavItem >
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                            </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                            </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                            </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <Button outline color="light" onClick={() => { setModalOpen(!isModalOpen) }}>
                                    <span className="fa fa-sign-in fa-lg"></span>&nbsp; Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique
                            fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <Modal isOpen={isModalOpen} toggle={() => { setModalOpen(!isModalOpen) }}> {/* to press out & exit */}
                <ModalHeader toggle={() => { setModalOpen(!isModalOpen) }}>Login</ModalHeader> {/* to press X & exit */}
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" />
                                    Remember me
                                </Label>
                        </FormGroup>
                        <br />
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default Header;