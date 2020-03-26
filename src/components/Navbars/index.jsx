import React from "react";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

import styled from "styled-components";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

const HeadRoomControl = styled.div`
  .headroom--not-top {
    background-color: inherit !important;
  }

  @media only screen and (min-width: 992px) {
    .width-control {
      width:80vw;
    }
  }
    
  `;

class Navbars extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <HeadRoomControl>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container fluid={true} className="width-control">
              <NavbarBrand className="mr-lg-5 text-white" to="/">
                <h4 className="">
                  <i className="ni ni-spaceship" />
                  &nbsp;<span className="highlight">J</span>Sudung
                </h4>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6 ">
                      <h6 className="heading text-primary ">
                        <i className="ni ni-spaceship" />
                        &nbsp;JSudung
                      </h6>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Content</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="#"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-badge" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              About Me
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              More to come..
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="#"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-paper-diploma" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-success mb-md-1">
                              Experiences
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              More to come..
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="#"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Projects
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              More to come..
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/in/joshsudung/"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Find me on Linkedin
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/josh-sudung"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Find me on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://wa.me/6281286023112"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-whatsapp" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Whatsapp
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Contact me on Whatsapp
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="mailto:josh.sudung07@gmail.com"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-at" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Email
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Email me
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <h6 className='text-white'>
                      Josh Sudung - 2020
                    </h6>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </HeadRoomControl>
    );
  }
}

export default Navbars;