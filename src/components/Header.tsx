import * as React from 'react';
import '../css/site.css'
import { Navbar, Nav, NavItem, Collapse } from 'reactstrap';
import { Link } from "react-router-dom";

const Header: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <Collapse isOpen={true} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className='linknav' to="/hello">Hello TypeScript</Link>
          </NavItem>
          <NavItem>
            <Link className='linknav' to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link className='linknav' to="/member">member</Link>
          </NavItem>
        </Nav>
        </Collapse>
      </Navbar>

    </div>
  );
};

export default Header;
