import React from "react"
import { Row, Container, Col } from "reactstrap"
import "./_ourblog.scss"
import BlogSlider from "./Components/OurblogSlider"


const OurBlog = props => {
  return (
    <>
      <div className="our-blog-wrp dark-background">
        <Container>
          <Row>
            <Col sm="12" md="12" lg="12">
              <div className="text-center our-blog-text">
                <div className="heading-invert">
                  <h2>Our Blog</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat duis.
                </p>
              </div>
            </Col>
          </Row>
          
        </Container>
        <div className="blog-tile-wrp bullet-list-styled">
          <BlogSlider/>
          </div>
      </div>
      <div className="bg-primary py-4">
          <Container>
              <Row>
                  <Col sm="12" md={{size:12}} lg={{size:5 , offset:1}} className="d-flex align-items-center">
                        <div className="get-started-heading heading-invert">
                            <h4>Are You Ready to Start with Us?</h4>
                        </div>
                  </Col>
                  <Col sm="12" md={{size:12}} lg={{size:5 , offset:1}} className="d-flex align-items-center">
                      <div className="get-started-btn ">
                          <a href="/" aria-label="link" className="btn_primary_invert d-inline-block my-3 mr-3">Get Started</a>
                          <a href="/" aria-label="link" className="btn_line_invert d-inline-block mr-3 my-lg-3 my-sm-2">Learn More</a>
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>
    </>
  )
}

export default OurBlog
