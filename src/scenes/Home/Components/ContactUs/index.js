import React from "react"
import { Row, Container, Col } from "reactstrap"
import "./_contactus.scss"

const Map = props => {
  return (
    <div className="background-dark">
      <Container>
        <Row>
          <Col sm="12" md="12" lg="12">
            <div className=" text-center">
              <div className="heading-invert">
                <h2>Contact Us</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="4" lg="4">
            <div className="contact-no text-center">
              <span className="contact-icon">
              <i className="ri-phone-fill"></i>
              </span>{" "}
              <span>
                <a href="tel:+30 226 4881 514" aria-label="contact number">
                 +30 226 4881 514
                </a>
                <br />
                <a href="tel:+30 226 4881 514" aria-label="contact number">
                 
                &nbsp; &nbsp;  &nbsp;   +30 226 4881 514
                  
                </a>
              </span>
            </div>
          </Col>
          <Col sm="12" md="4" lg="4">
            <div className="contact-email text-center">
              <span className="contact-icon">
              <i className="ri-mail-fill"></i>
              </span>{" "}
              <span>
                <a href="mailto:info@smarttool.com" aria-label="contact number">
                  info@smarttool.com
                </a>
              </span>
            </div>
          </Col>
          <Col sm="12" md="4" lg="4">
            <div className="contact-address">
              <span className="contact-icon">
              <i className="ri-map-pin-2-fill"></i>
              </span>{" "}
              <span>
                
                  1722 Poplar Avenue,
                  <br />
                  &nbsp; &nbsp;  &nbsp; San Diego, California 92101.
                
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Map
