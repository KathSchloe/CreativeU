import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Back End Capstone | CreativeU</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/posts">All Hobbies</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/posts/add">Add Hobby</NavLink>
            </NavItem>


            <NavItem>
              <NavLink href="/"
                onClick={() => {
                    localStorage.removeItem("CreativeU_user")
                }}>
                <strong>Logout</strong>
              </NavLink>

            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}