import React from "react"
import { Row, Container, Col } from "reactstrap"
import "./_howitworks.scss"

const Howitworks = props => {
  return (
    <div>
      <div className="how-it-works-wrp">
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="heading-invert text-center">
                <h2>How it Works?</h2>
              </div>
            </Col>
            <Col sm="12" md={{ size: 12 }} lg="12" className="mx-auto">
              <div className="mb-5">
                <div className="how-it-works-desc text-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                    duis.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="12" md="6" lg="3">
              <div className="how-works-section">
                <Row>
                  <Col sm="12" md="12" lg={{ size: 12, order: 1 }}>
                    <div className="position-relative">
                      <div className="how-works-vector1 mx-auto mt-sm-0 mb-sm-3 mt-3 mb-lg-5"></div>

                      <div className="counter-badge1 d-none d-md-block d-lg-block">01</div>
                    </div>
                  </Col>
                  <Col sm="12" md="12" lg={{ size: 12, order: 2 }}>
                    <div className="how-works-title heading-invert text-center">
                      <h6>Perspiciatis unde sed</h6>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, lorem mistawken consectetur
                      adipiscing elit, sed do eiusmweod tempor incididunt ut
                      amet labore.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm="12" md="6" lg="3">
              <div className="how-works-section">
                <Row>
                  <Col xs={{ size: 12, order: 2 }} sm={{ size: 12, order: 2 }} md="12" lg={{ size: 12, order: 1 }}>
                    <div className=" mt-3 mb-lg-5 mb-sm-1">
                      <div className="how-works-title heading-invert text-center ">
                        <h6>Accusantium doloremque</h6>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, lorem mistawken consectetur
                        adipiscing elit, sed do eiusmweod tempor incididunt ut
                        amet labore.
                      </p>
                    </div>
                  </Col>
                  <Col xs={{ size: 12, order: 1 }} sm={{ size: 12, order: 1 }} md="12" lg={{ size: 12, order: 2 }}>
                    <div className="position-relative">
                      <div className="how-works-vector2 mx-auto"></div>
                      <div className="counter-badge2 d-none d-md-block d-lg-block">02</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm="12" md="6" lg="3">
              <div className="how-works-section">
                <Row>
                  <Col sm="12" md="12" lg={{ size: 12, order: 1 }}>
                    <div className="position-relative">
                      <div className="how-works-vector3 mx-auto mt-sm-2 mb-sm-3 mt-lg-3 mb-lg-5"></div>
                      <div className="counter-badge2 d-none d-md-block d-lg-block">03</div>
                    </div>
                  </Col>
                  <Col sm="12" md="12" lg={{ size: 12, order: 2 }}>
                    <div className="how-works-title heading-invert text-center">
                      <h6>Perspiciatis unde sed</h6>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, lorem mistawken consectetur
                      adipiscing elit, sed do eiusmweod tempor incididunt ut
                      amet labore.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm="12" md="6" lg="3">
              <div className="how-works-section">
                <Row>
                  <Col xs={{size:12, order:2}} sm={{size:12, order:2}}  md="12" lg={{ size: 12, order: 1 }}>
                    <div className=" mt-3 mb-5">
                      <div className="how-works-title heading-invert text-center ">
                        <h6>Accusantium doloremque</h6>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, lorem mistawken consectetur
                        adipiscing elit, sed do eiusmweod tempor incididunt ut
                        amet labore.
                      </p>
                    </div>
                  </Col>
                  <Col xs={{size:12, order:1
                  }} sm={{size:12, order:1
                  }} md="12" lg={{ size: 12, order: 2 }}>
                    <div className="position-relative">
                      <div className="how-works-vector4 mx-auto"></div>
                      <div className="counter-badge2 d-none d-md-block d-lg-block">04</div>
                    </div>
                  </Col>
                </Row>
              </div>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Howitworks
