import React from "react"
import "./_slider.scss"
import Slider from "react-slick"
import Sliderimg from "../Imagecomponents/Sliderone"
import { Container, Row, Col } from "reactstrap"

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
const SliderHome = () => (
  <div className="slider-wrp">
    <Container>
      <Slider {...settings}>
        <div className="slide-custom">
          <Row>
            <Col sm="12" md="7" lg="7">
              <div className="slider-heading">
                <div className="heading-invert d-flex align-items-center">
                  <h1>Best practices for better design</h1>
                </div>
                <div className="d-block banner-padding ml-1">
                  <form className="form-inline banner-form">
                    <div className="form-group mr-2 mb-0">
                      <label htmlFor="inputemail1" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control border-0"
                        id="inputemail1"
                        placeholder="Enter your e-mail"
                      />
                    </div>
                    <div className="banner-btn-padding">
                    <button type="submit" className="btn-primary">
                    subscribe
                    </button>
                    </div>
                  </form>
                  <div className="banner-text">
                    <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="12" md="5" lg="5">
              <a href="/" aria-label="Slider image link">
                <Sliderimg />
              </a>
            </Col>
            <div className="scroll-down-banner">
            <span><a href="#section1" aria-label="Go down" className="scroll-down-icon"><span></span></a><span> scroll</span></span>
          </div>
          </Row>
        </div>
        <div className="slide-custom">
          <Row>
          <Col sm="12" md="7" lg="7">
              <div className="slider-heading">
                <div className="heading-invert d-flex align-items-center">
                  <h1>Best practices for better design2</h1>
                </div>
                <div className="d-block banner-padding ml-1">
                  <form className="form-inline banner-form">
                    <div className="form-group mr-2 mb-0">
                      <label htmlFor="inputemail2" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control border-0"
                        id="inputemail2"
                        placeholder="Enter your e-mail"
                      />
                    </div>
                    <div className="banner-btn-padding">
                    <button type="submit" className="btn-primary">
                    subscribe
                    </button>
                    </div>
                  </form>
                  <div className="banner-text">
                    <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="12" md="5" lg="5">
              <a href="/" aria-label="Slider image link">
                <Sliderimg />
              </a>
              
            </Col>
            <div className="scroll-down-banner">
            <span><a href="#section1" aria-label="Go down" className="scroll-down-icon"><span></span></a><span> scroll</span></span>
          </div>
          </Row>
        </div>
        <div className="slide-custom">
          <Row>
          <Col sm="12" md="7" lg="7">
              <div className="slider-heading">
                <div className="heading-invert d-flex align-items-center">
                  <h1>Best practices for better design3</h1>
                </div>
                <div className="d-block banner-padding ml-1">
                  <form className="form-inline banner-form">
                    <div className="form-group mr-2 mb-0">
                      <label htmlFor="inputemail3" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control border-0"
                        id="inputemail3"
                        placeholder="Enter your e-mail"
                      />
                    </div>
                    <div className="banner-btn-padding">
                    <button type="submit" className="btn-primary">
                    subscribe
                    </button>
                    </div>
                  </form>
                  <div className="banner-text">
                    <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="12" md="5" lg="5">
              <a href="/" aria-label="Slider image link">
                <Sliderimg />
              </a>
            </Col>
            <div className="scroll-down-banner">
            <span><a href="section1" aria-label="Go down" className="scroll-down-icon"><span></span></a><span> scroll</span></span>
          </div>
          </Row>
          
        </div>
        
      </Slider>
    </Container>
  </div>
)

export default SliderHome
