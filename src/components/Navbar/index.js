import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container} from 'reactstrap'
  import Logo from "../ImageComponents/Logo"
  import "./_navigation.scss"

export default class Navibar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    if (!this.state.isOpen) {
      document.getElementById("Navbartoggler").classList.add("ed_close_icon")
    } else {
      document.getElementById("Navbartoggler").classList.remove("ed_close_icon")
    }
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar className="nav-custom" dark  expand="md">
          <Container className="position-relative">
            <NavbarBrand href="/" aria-label="smart tool logo">
              <h1>
                {" "}
                <Logo />
              </h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} id="Navbartoggler" aria-label="toggle button">
              <span className="tb-icon-bar"></span>
              <span className="tb-icon-bar"></span>
              <span className="tb-icon-bar"></span>
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown1"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Design
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown1"
                  >
                    <a className="dropdown-item" href="#">
                      Action1
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action1
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here1
                    </a>
                  </div>
                </li> */}
                
                {/* <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Development
                  </a>
                  <div
                    className="dropdown-menu mega-menu"
                    aria-labelledby="navbarDropdown2"
                  >
                    <Row>
                      <Col sm="12" md="8" lg="8">
                        <a className="dropdown-item" href="/">
                          Action2
                        </a>
                        <a className="dropdown-item" href="/">
                          Another action2
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">
                          Something else here2
                        </a>
                      </Col>
                      <Col sm="12" md="4" lg="4">
                        <a className="dropdown-item" href="/">
                          Action2
                        </a>
                        <a className="dropdown-item" href="/">
                          Another action2
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">
                          Something else here2
                        </a>
                      </Col>
                    </Row>
                  </div>
                </li> */}
                <NavItem>
                  <NavLink href="/" aria-label="nav link">
                    Solutions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" aria-label="nav link">
                    How it works
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" aria-label="nav link">
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" aria-label="nav link">
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" aria-label="nav link">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
