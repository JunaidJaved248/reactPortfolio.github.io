

import React from "react";
import './style.css';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer ,MDBAnimation} from "mdbreact";

const Experience = () => {
  return (
    <MDBContainer className="resume-experience">

      <MDBAnimation type="pulse" delay=".5s" infinite className="">
   <h3 className="laguage-main text-white">RES<span className="skill-half">UME</span></h3>
   </MDBAnimation>

       <div class="row mt-5 mb-5">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <MDBPopover
          placement="top"
          popover
          clickable
          id="popper1"
        >
          <MDBBtn color="success">Academy Tutor.2015</MDBBtn>
          <div color="success">
            <MDBPopoverHeader className="header">Academy Tutor.</MDBPopoverHeader>
            <MDBPopoverBody>
              (July 2015 - May 2017).
            </MDBPopoverBody>
          </div>
        </MDBPopover>
         </div>

         <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <MDBPopover
          placement="bottom"
          popover
          clickable
          id="popper2"
        >
          <MDBBtn color="success">ITFalcons.2017</MDBBtn>
          <div>
            <MDBPopoverHeader className="header">IT Falcons</MDBPopoverHeader>
            <MDBPopoverBody>
              Internship ( From May 2017 - july 2017 )
            </MDBPopoverBody>
          </div>
        </MDBPopover>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <MDBPopover
          placement="top"
          popover
          clickable
          id="popper3"
        >
          <MDBBtn color="success">ITFalcons.2017</MDBBtn>
          <div>
            <MDBPopoverHeader className="header">IT Falcons</MDBPopoverHeader>
            <MDBPopoverBody>
              Junior Software Engineer ( From July 2017 - September 2017 )

            </MDBPopoverBody>
          </div>
        </MDBPopover>
       </div>

       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <MDBPopover
          placement="bottom"
          popover
          clickable
          id="popper4"
        >
          <MDBBtn color="success">ITFalcons.2018</MDBBtn>
          <div>
            <MDBPopoverHeader className="header">IT Falcons</MDBPopoverHeader>
            <MDBPopoverBody>
              ASsociate Software Engineer ( From April 2018 - Present ).
            </MDBPopoverBody>
          </div>
        </MDBPopover>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Experience;