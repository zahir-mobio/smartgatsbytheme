
import React from "react"
import { Row, Container, Col } from "reactstrap"
import FeatureImg from "../Imagecomponents/FeatureImg"
import "./_features.scss"

const Features = props => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12" md="6" lg="6">
            <div className="features-wrp">
              <h2>Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
              <div className="bullet-list-styled">
                <ul>
                  <li><div className="list-icon1"></div>Sed ut perspiciatis unde</li>
                  <li><div className="list-icon2">Perspiciatis unde sed</div></li>
                  <li><div className="list-icon3">Perspiciatis unde sed</div></li>
                  <li><div className="list-icon4">Sed ut perspiciatis unde</div></li>
                  <li><div className="list-icon5">Sed ut perspiciatis unde</div></li>
                  <li><div className="list-icon6">Perspiciatis unde sed</div></li>
                  </ul>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.</p>

              <div className="my-4">
                <a href="/" className="btn-primary d-inline-block" aria-label="Getstarted link">Get Started</a>
                <a href="/" className="line-btn ml-4 d-inline-block" aria-label="Learn More">Learn More</a>
              </div>
            </div>
            
          </Col>
          <Col sm="12" md="6" lg="6">
            <div className="features-img-wrp position-relative">
              <FeatureImg/>
              <div className="bg-effect">

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Features
