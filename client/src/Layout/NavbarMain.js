import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" id="navbar">
          <NavbarBrand href="/"><span id="first-init">A</span>drian <span id="last-init">S</span>mith</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/blog/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ASmithStudent">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ASmithStudent">Projects</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}