import React, { Component } from 'react';
import './style.css';
import {MDBAnimation } from "mdbreact";
import Service from './ServicesComponent';
class About extends Component
 {
render()
{
	return(
    <div className="About-us">
    <div className="container">
      <MDBAnimation type="pulse" delay=".5s" infinite className="">
     <h1 className="about-main-head">About <span className="abt-me"> ME</span></h1>
    </MDBAnimation>
    <div className="about-section-info">
    <div className="row">
    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
    <MDBAnimation type="fadeInLeft" delay=".5s" className="">

   <a> <img src={process.env.PUBLIC_URL + '/assets/images/jj.jpg'} className="about-img rounded-circle" /></a>
    <h3 className="rank">Website & Mobile</h3><h3 className="rank2"> Application Developer</h3>
    </MDBAnimation>
    </div>
    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
    <MDBAnimation type="fadeInRight" delay=".5s" className="">
    <div class="about-right">
    <h2 className="about-me">I am <span className="my-name"> Junaid Javaid</span></h2>
    <p className="about-me-para">I have more than 2 year of experience in the field of Web Developer ,
     Desktop Application, OS Administration. 
    Specialized in Laravel & php tools and also in others tools.
My objectives are increasing my knowledge in computer science fields and new technologies especially,
 web development and Game Development field. Always looking forward to learn new technologies and 
 be a part of a huge change in the world. Aspiring for the Competent position in a prestigious and 
 prosperous company where i can utilize my skills for the mutual batterment we both are striving for.
 </p>
 <div className="row">

  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
  <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fas fa-user about-icon"></i>
  </div>
  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Name<span className="star">*</span></h5>
   <h5  className="about-ps-data">Junaid Javaid</h5>
   </div>
   </div>
   </div>

    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
    <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fas fa-envelope about-icon"></i>
  </div>
    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">
Email<span className="star">*</span></h5>
   <h5  className="about-ps-data">junaidjaved8461@gmail.com</h5>
   </div>
   </div>
</div>
 
 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
  <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fas fa-phone-volume about-icon"></i>
   </div>
    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Phone<span className="star">*</span></h5>
   <h5  className="about-ps-data">+92 304-2039304</h5>
   </div>
   </div>
 </div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
  <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fas fa-map-marker-alt about-icon"></i>
   </div>
   <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Date Of Birthday<span className="star">*</span></h5>
   <h5  className="about-ps-data">16 November 1996</h5>
   </div>
   </div>
</div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
  <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="far fa-calendar-alt about-icon"></i>
  </div>
   <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Address<span className="star">*</span></h5>
   <h5  className="about-ps-data">House # E-16/A-3, street # 3, Fancy Park Korey Stop Rifle Range Road Walton Road Lahore Cantt</h5>
   </div>
   </div>
</div>


<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
<div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fab fa-font-awesome-flag about-icon"></i>
  </div>
     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Nationality<span className="star">*</span></h5>
   <h5  className="about-ps-data">Pakistan</h5>
   </div>
   </div>
</div>


  </div>
   </div>
   </MDBAnimation>
   </div>
    </div>

    <div className="social-icons">
   <MDBAnimation type="pulse" delay=".5s" infinite className="">
    <h4>Social <span className="skill-half">Profile</span></h4>
    </MDBAnimation>
     <a><i class="fab fa-facebook-f social-icon"></i></a>
     <a><i class="fab fa-twitter social-icon"></i></a>
    <a> <i class="fab fa-pinterest-p social-icon"></i></a>
      <a> <i class="fab fa-facebook-f social-icon"></i></a>
     <a><i class="fab fa-twitter social-icon"></i></a>
    <a> <i class="fab fa-pinterest-p social-icon"></i></a>
    

    </div>


     </div>

    </div>
    
    <Service />
    </div>

		);
}



	}
	export default About;