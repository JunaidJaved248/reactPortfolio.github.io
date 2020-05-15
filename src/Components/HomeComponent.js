

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "./index.css";
import './style.css';

class Home extends React.Component {


  render() {

    return (
      <div id="apppage">

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                  <MDBAnimation type="pulse" delay="8s" infinite >
                    <h1 className="h1-responsive font-weight-bold mt-sm-5 home-main-head">
                      Hi I am <span className="span-home-head">Junaid Javaid</span>
                    </h1>
                    </MDBAnimation>
                    <hr className="hr-light" />
                    <MDBAnimation type="fadeInLeft" delay="2s" >
                    <MDBAnimation type="pulse" delay="2s" infinite className="slow"  >
                    <h3 className="mb-2 font-weight-bold home-skills">
                      Laravel Developer.
                    </h3>
                    </MDBAnimation>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInRight" delay="3s" >
                    <MDBAnimation type="pulse" delay="3s" infinite className="slow"  >
                     <h3 className="mb-2 font-weight-bold home-skills">
                      Web Application developer.
                    </h3>
                     </MDBAnimation>
                     </MDBAnimation>
                    <MDBAnimation type="fadeInLeft" delay="4s" >
                    <MDBAnimation type="pulse" delay="4s" infinite className="slow"  >
                     <h3 className="mb-2 font-weight-bold home-skills">
                      Mobile Application Developer.
                    </h3>
                    </MDBAnimation>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInRight" delay="5s" >
                    <MDBAnimation type="pulse" delay="5s" infinite className="slow"  >
                     <h3 className="mb-2 font-weight-bold home-skills">
                      Desktop Application Developer.
                    </h3>
                    </MDBAnimation>
                    </MDBAnimation>
                     <MDBAnimation type="fadeInLeft" delay="6s" >
                     <MDBAnimation type="pulse" delay="6s" infinite className="slow"  >
                     <h3 className="mb-2 font-weight-bold home-skills">
                      Windows Administrator.
                    </h3>
                    </MDBAnimation>
                    </MDBAnimation>

                       <MDBAnimation type="fadeInRight" delay="7s" >
                      <MDBAnimation type="pulse" delay="7s" infinite className="slow"  >
                     <h3 className="mb-2 font-weight-bold home-skills">
                      Certified ceh.
                     
                    </h3>
                     </MDBAnimation>
                    </MDBAnimation>
                   
                    <MDBBtn color="success">Download Cv</MDBBtn>
                    
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5 mt-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                   <MDBAnimation type="bounceOut" delay="7s" infinite className="slow" >
                    <img
                      src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                      alt=""
                      className="img-fluid logo-right center"
                    />
                    </MDBAnimation>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>


      </div>
    );
  }
}

export default Home;