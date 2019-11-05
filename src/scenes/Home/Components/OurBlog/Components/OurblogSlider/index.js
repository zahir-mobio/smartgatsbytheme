import React from "react"
import { Row, Col } from "reactstrap"
import Slider from "react-slick"
import "./_ourblogslider.scss"
import BlogOne from "../../../Imagecomponents/BlogOne"
import BlogTwo from "../../../Imagecomponents/BlogTwo"
import BlogThree from "../../../Imagecomponents/Blogthree"
import BlogFour from "../../../Imagecomponents/BlogFour"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  arrows: true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
}
const OurblogSlider = props => {
  return (
    <>
      <div className="blog-slide">
      
          
            <Slider {...settings}>
              <div className="blog-slide-custom position-relative">
              <div className="blog-overlay">
                <div className="position-relative p-3">
                <div className="">
                  <h6>The Smarttool Agency Driving Design Innovation</h6>
                  </div>
                  <div className=" overlay-date">
                    <span>Sep <br/>27 <br/>2019</span>
                  </div>
                  </div>
              </div>
              <BlogOne/>
              </div>
              <div className="blog-slide-custom position-relative">
              <div className="blog-overlay">
                <div className="position-relative p-3">
                <div className="">
                  <h6>The Smarttool Agency Driving Design Innovation</h6>
                  </div>
                  <div className=" overlay-date">
                    <span>Sep <br/>27 <br/>2019</span>
                  </div>
                  </div>
              </div>
              <BlogTwo/>
              </div>
              <div className="blog-slide-custom position-relative">
              <div className="blog-overlay">
                <div className="position-relative p-3">
                <div className="">
                  <h6>The Smarttool Agency Driving Design Innovation</h6>
                  </div>
                  <div className=" overlay-date">
                    <span>Sep <br/>27 <br/>2019</span>
                  </div>
                  </div>
              </div>
              <BlogThree/>
              </div>
              <div className="blog-slide-custom position-relative">
              <div className="blog-overlay">
                <div className="position-relative p-3">
                <div className="">
                  <h6>The Smarttool Agency Driving Design Innovation</h6>
                  </div>
                  <div className=" overlay-date">
                    <span>Sep <br/>27 <br/>2019</span>
                  </div>
                  </div>
              </div>
              <BlogFour/>
              </div>
              <div className="blog-slide-custom position-relative">
              <div className="blog-overlay">
                <div className="position-relative p-3">
                <div className="">
                  <h6>The Smarttool Agency Driving Design Innovation</h6>
                  </div>
                  <div className=" overlay-date">
                    <span>Sep <br/>27 <br/>2019</span>
                  </div>
                  </div>
              </div>
              <BlogFour/>
              </div>
            </Slider>
          
        
      </div>
    </>
  )
}

export default OurblogSlider
