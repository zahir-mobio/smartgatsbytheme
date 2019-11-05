import React from "react"
import { Row, Container, Col } from "reactstrap"
import "./_footer.scss"
import FooterLogo from "../ImageComponents/FooterLogo"

const Footer = () => (
  <>
    <div className="footer-wrp">
      <Container>
        <Row>
          <Col sm="6" md="6" lg="4">
            <h1>
              <a href="/" aria-label="Logo">
                {" "}
                <FooterLogo />
              </a>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis nostrud exercitation.
            </p>
            <div className="footer-social-icon-wrp bullet-list-styled">
              <ul>
                <li>
                  <div className="footer-social-icon ">
                    <a
                      href="/"
                      aria-label=""
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="footer-social-icon">
                    <a
                      href="/"
                      aria-label=""
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="footer-social-icon">
                    <a
                      href="/"
                      aria-label=""
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm="6" md="6" lg="2">
            <div className="quick-links">
              <h6>QUICK LINKS</h6>
              <div className="bullet-list-styled">
                <ul>
                  <li>
                    <a href="/" aria-label="quicklink">
                      Home
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/" aria-label="quicklink">
                      Solutions
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/" aria-label="quicklink">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a href="/" aria-label="quicklink">
                      Features
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/" aria-label="quicklink">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/" aria-label="quicklink">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="6">
            <div className="footer-form">
              <form action="/">
                <Row>
                  <Col md="6" lg="6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="checkbox">
                     
                        <input type="checkbox" id="remember" name="remember" value="remember" defaultChecked/> 
                        <label htmlFor="remember"><span>Remember me</span></label>
                       
                    </div>
                  </Col>
                  <Col md="6" lg="6">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        id="message"
                      ></textarea>
                    </div>
                    <div className="footer-btn-wrp">
                    <button type="submit" className="btn btn-primary">
                      send message
                    </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
    <div className="sub-footer">
        <Container>
          <Row>
            <Col sm="12" md="6" lg="6">
              <div className="copyright-text">
                <p>Our company is a real example for all existing organizations in the world</p>
                <p>Copyright © 2019 SmartTool | All Rights Reserved</p>
              </div>
            </Col>
            <Col sm="12" md="6" lg="6">
              <div className="footer-privacy-links bullet-list-styled">
                <ul>
                  <li><a href="/" aria-label="link">PRIVACY POLICY</a></li>
                  <li><a href="/" aria-label="link">TERMS & CONDITIONS</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
  </>
)

export default Footer
