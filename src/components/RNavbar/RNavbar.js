import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { env } from '../../env';
import './RNavbar.scss';
import lablogo from './lab_logo_red.png';
import usulogo from './usulogo2.png';
import rlogo from './My project.png';
import { Divider } from 'antd';
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

  render() {
    console.log(this.props.active)
    let className = 'mx-1'
    let active = 'mx-1 current'
    return (
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

              <Nav className="">
                <Nav.Link href={`${env.BASE_URL}/`} className={'home' === this.props.active ? active : className}>
                  Home
                </Nav.Link>
                {/* <Nav.Link href= {`${env.BASE_URL}/species/1`} className={'species' === this.props.active ? active : className}>
              Species
            </Nav.Link> */}
                <NavDropdown title="Species" id="basic-nav-dropdown">
                  <NavDropdown.Item href={`${env.BASE_URL}/species/1`} className={'species' === this.props.active ? active : className}>
                    <i>Bos taurus</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/2`} className={'species' === this.props.active ? active : className}>
                    <i>Capra hircus</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/3`} className={'species' === this.props.active ? active : className}>
                    <i>Canis lupus familiaris</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/4`} className={'species' === this.props.active ? active : className}>
                    <i>Felis catus</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/5`} className={'species' === this.props.active ? active : className}>
                    <i>Equus asinus</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/6`} className={'species' === this.props.active ? active : className}>
                    <i>Equus callabus</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/7`} className={'species' === this.props.active ? active : className}>
                    <i>Sus sacrofa</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/8`} className={'species' === this.props.active ? active : className}>
                    <i>Bubalus bubalis</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/9`} className={'species' === this.props.active ? active : className}>
                    <i>Ovis aries</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/10`} className={'species' === this.props.active ? active : className}>
                    <i>Bos grunniens</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/11`} className={'species' === this.props.active ? active : className}>
                    <i>Apis melifera</i>
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/species/12`} className={'species' === this.props.active ? active : className}>
                    <i>Gallus gallus</i>
                  </NavDropdown.Item>


                </NavDropdown>
                <NavDropdown title="Tools" id="basic-nav-dropdown">
                  <NavDropdown.Item href={`${env.BASE_URL}/blast`} className={'blast' === this.props.active ? active : className}>
                    BLAST
                  </NavDropdown.Item>
                  <NavDropdown.Item href={`${env.BASE_URL}/tools`} className={'tools' === this.props.active ? active : className}>
                    SSR Prediction
                  </NavDropdown.Item>

                </NavDropdown>

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
        <Divider />
      </div>

    )

  }
}

export { RNavbar };