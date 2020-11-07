import React from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
    const [isNavOpen, setOpen] = React.useState(false);

    return (
        <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={() => { setOpen(!isNavOpen) }} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" alt="logo" height="30" width="41" />
                    </NavbarBrand>
                    <Collapse navbar isOpen={isNavOpen} > {/* to collapse for smaller */}
                        <Nav navbar className="ml-auto mr-3">
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
        </>
    );
}

export default Header;