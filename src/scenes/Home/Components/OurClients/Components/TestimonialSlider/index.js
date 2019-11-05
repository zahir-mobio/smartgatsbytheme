import React from "react"
import "./_testimonialslider.scss"
import Slider from "react-slick"
import { Container, Row, Col } from "reactstrap"
import QuoteOpen from "../../../Imagecomponents/Quoteopen"
import QuoteClose from "../../../Imagecomponents/Quoteclose"
import ProfilePicone from "../../../Imagecomponents/ProfilePicone"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
}
const TestimonialSlider = () => (
  <div className="testimonialslider-wrp basic-slider">
    <Container>
      <Slider {...settings}>
        <div className="testimonial-custom">
          <Row>
            <Col
            xs={{ size: 11, offset: 1 }}
              sm={{ size: 11, offset: 1 }}
              md={{ size: 6, offset: 6 }}
              lg={{ size: 6, offset: 6 }}
              className="mx-auto"
            >
              <div className="text-center position-relative">
                <h4>These guys are real professionals. Undoubtedly!</h4>
                <div className="quote-open">
                <QuoteOpen />
              </div>

              <div className="quote-close">
                <QuoteClose />
              </div>
              </div>
              <div className="slider-profile text-center">
              <div className="profile-pic text-center mx-auto pt-4 pb-2">
                <ProfilePicone />
              </div>
              <h5>Johnson Doe</h5>
              <div className="designation">
                  <span>Creative Director, Artmedia</span>
              </div>
              </div>
              
            </Col>
          </Row>
        </div>
        <div className="testimonial-custom">
        <Row>
            <Col
            xs={{ size: 11, offset: 1 }}
              sm={{ size: 11, offset: 1 }}
              md={{ size: 6, offset: 6 }}
              lg={{ size: 6, offset: 6 }}
              className="mx-auto"
            >
              <div className="text-center position-relative">
                <h4>These guys are real professionals. Undoubtedly!</h4>
                <div className="quote-open">
                <QuoteOpen />
              </div>

              <div className="quote-close">
                <QuoteClose />
              </div>
              </div>
              <div className="slider-profile text-center">
              <div className="profile-pic text-center mx-auto pt-4 pb-2">
                <ProfilePicone />
              </div>
              <h5>Johnson Doe</h5>
              <div className="designation">
                  <span>Creative Director, Artmedia</span>
              </div>
              </div>
              
            </Col>
          </Row>
        </div>
        <div className="testimonial-custom">
        <Row>
            <Col
            xs={{ size: 11, offset: 1 }}
              sm={{ size: 11, offset: 1 }}
              md={{ size: 6, offset: 6 }}
              lg={{ size: 6, offset: 6 }}
              className="mx-auto"
            >
              <div className="text-center position-relative">
                <h4>These guys are real professionals. Undoubtedly!</h4>
                <div className="quote-open">
                <QuoteOpen />
              </div>

              <div className="quote-close">
                <QuoteClose />
              </div>
              </div>
              <div className="slider-profile text-center">
              <div className="profile-pic text-center mx-auto pt-4 pb-2">
                <ProfilePicone />
              </div>
              <h5>Johnson Doe</h5>
              <div className="designation">
                  <span>Creative Director, Artmedia</span>
              </div>
              </div>
              
            </Col>
          </Row>
        </div>
      </Slider>
      <Row className="text-center"></Row>
    </Container>
  </div>
)

export default TestimonialSlider
