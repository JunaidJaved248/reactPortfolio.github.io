
import React, { Component } from 'react';
import './style.css';
import {MDBAnimation } from "mdbreact";
class Service extends Component
 {
render()
{
	return(
      <div className="service">

  <MDBAnimation type="pulse" delay=".5s" infinite className="">
 <h1 className="service-main-head">Serv<span className="skill-half">ices</span></h1>
 </MDBAnimation>
 <div class="container">
<div class="row">

<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
<div class="service-section">
<MDBAnimation type="pulse" delay=".5s" infinite className="">
<i class="fas fa-palette service-icon"></i>
</MDBAnimation>
<h3 className="services-main-head">Web Design</h3>
<p class="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
</div>

</div>

<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
<div class="service-section ">

<MDBAnimation type="pulse" delay=".5s" infinite className="">
<i class="fas fa-code service-icon"></i>
</MDBAnimation>
<h3 className="services-main-head">Web Development</h3>
<p class="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>


</div>

</div>


<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
<div class="service-section">

<MDBAnimation type="pulse" delay=".5s" infinite className="">
<i class="fas fa-mobile-alt service-icon"></i>
</MDBAnimation>
<h3 className="services-main-head">Mobile Application</h3>
<p class="services-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>

</div>

</div>


</div>


 </div>

      </div>


		);
}
}
export default Service;