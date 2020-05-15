
import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput,MDBAnimation } from "mdbreact";
import './style.css';
const Contact = () => {
  return (
    <div className="contact-form">
    <div className="container ">
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      <MDBAnimation type="pulse" delay=".5s" infinite className="">
        Contact <span className="skill-half">me</span>
        </MDBAnimation>
      </h2>
      <p className="text-center w-responsive mx-auto pb-5 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
      
        <MDBCol lg="5" className="lg-0 mb-4">
        <MDBAnimation type="fadeInLeft" delay=".5s" className="slow">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header text-center accent-1 pt-5 pb-5 text-dark">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> LET’S HAVE A FUN:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>

        <MDBCol lg="7">
        <MDBAnimation type="fadeInRight" delay=".5s" className="slow">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center text-white">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p className="text-white">Cantt</p>
              <p className="mb-md-0" className="text-white"> House # E-16/A-3, street # 3, Fancy Park Korey Stop Rifle Range Road Walton Road Lahore Cantt</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="text-white">+92 304 2039304</p>
              <p className="mb-md-0" className="text-white">Whatsapp:+92 304 2039304</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="text-white"> junaidjaved8461@gmail.com</p>
              <p className="mb-md-0" className="text-white"> junaidjaved8461@gmail.com</p>
            </MDBCol>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="social-icons text-center mt-5">
   
 

     <a><i class="fab fa-facebook-f social-icon"></i></a>
     <a><i class="fab fa-twitter social-icon"></i></a>
    <a> <i class="fab fa-pinterest-p social-icon"></i></a>
      <a> <i class="fab fa-facebook-f social-icon"></i></a>
     <a><i class="fab fa-twitter social-icon"></i></a>
    <a> <i class="fab fa-pinterest-p social-icon"></i></a>
    
    </div>
    </div>
          </MDBRow>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </section>

    </div>




    </div>
  );
}

export default Contact;