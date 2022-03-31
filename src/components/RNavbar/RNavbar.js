import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { env } from '../../../env.js/index.js';
import './RNavbar.scss';
import lablogo from './lab_logo_red.png';
import usulogo from './usulogo2.png';
import rlogo from './My project.png';
import {Divider} from 'antd';
class RNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
    console.log(this.props.active);

    this.activeLink = this.activeLink.bind(this);
  }

  activeLink(link) {
    console.log(link)
    console.log(this.props.active)
    if (link === this.props.active) {
      return true;
    }

    return false;
  }

    render() {console.log(this.props.active)
        let className = 'mx-1'
        let active = 'mx-1 current'
return(
  <div className="container">
  <div className="row flex-lg-row align-items-center g-2 mt-2">

    <div className="col-md-2">
      <img src={lablogo} height={50} alt=''></img>
    </div>
    <div className="col-md-2">
      <img src={rlogo} height={60} alt=''></img>
    </div>
    <div className=" col-md-6 mt-2 nav-wrapper mx-auto">
        <Navbar className="justify-content-center">
          {/* <Navbar.Brand className="h-brand">
            <b>ranchSATdb</b>
          </Navbar.Brand> */}

          <Nav className="">
            <Nav.Link href= {`${env.BASE_URL}/home`} className={'home' === this.props.active ? active : className}>
              Home
            </Nav.Link>
            <Nav.Link href= {`${env.BASE_URL}/species/1`} className={'species' === this.props.active ? active : className}>
              Species
            </Nav.Link>
            <Nav.Link href="/tools" className={'tools' === this.props.active ? active : className}>
              Tools
            </Nav.Link>
            <Nav.Link href="/help" className={'help' === this.props.active ? active : className}>
              Help
            </Nav.Link>
          </Nav>

        </Navbar>
      </div>
      <div className="col-md-2">
      <img src={usulogo} height={50} alt=''></img>
    </div>
    </div>
    <Divider/>
      </div>

)

    }
}

export {RNavbar};