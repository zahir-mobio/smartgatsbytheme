import React, { useState } from "react"
import {
  Row,
  Container,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import VideoThumb from "../Imagecomponents/VideoImg"
import "./_videosection.scss"

const VideoSection = props => {
  const { className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  return (
    <div>
      <Container>
        <div className="Video-section" id="section1">
          <Row>
            <Col sm="12" md="6" lg="6">
              <div className="video-thumbnail-wrp">
                <div className="video-thumbnail-overlay">
              <button className="btn-transparent play-button" onClick={toggle} aria-label="play button"><i className="ri-play-line"></i></button>
              </div>
                  <VideoThumb/>
              </div>
            </Col>
            <Col sm="12" md="6" lg="6">
              <div className="video-info-wrp">
                <div className="heading-wrp">
                  <h2>Solution we provide</h2>
                </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                <div className="bullet-list-styled video-info-list">
                  <ul>
                    <li>Sed ut perspiciatis unde</li>
                    <li>Sed ut perspiciatis unde</li>
                    <li>Sed ut perspiciatis unde</li>
                    <li>Sed ut perspiciatis unde</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        
      </Container>
      
          <Container>
          <div className="four-grid-video-info-wrp">
            <Row>
              <Col sm="12" md="3" lg="3">
                <div className="four-grid-video-info">
                  <div className="video-info-title-bg">
                  <div className="video-info-title head-title-icon1">
                    <h6>Perspiciatis unde sed</h6>
                  </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur adipiscing elit, sed do eiusmweod tempor incididunt ut amet labore et doloertre magna aliqua. Ut nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                </div>
              </Col>
              <Col sm="12" md="3" lg="3">
                <div className="four-grid-video-info">
                  <div className="video-info-title-bg">
                  <div className="video-info-title head-title-icon1">
                    <h6>Perspiciatis unde sed</h6>
                  </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur adipiscing elit, sed do eiusmweod tempor incididunt ut amet labore et doloertre magna aliqua. Ut nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                </div>
              </Col>
              <Col sm="12" md="3" lg="3">
                <div className="four-grid-video-info">
                  <div className="video-info-title-bg">
                  <div className="video-info-title head-title-icon1">
                    <h6>Perspiciatis unde sed</h6>
                  </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur adipiscing elit, sed do eiusmweod tempor incididunt ut amet labore et doloertre magna aliqua. Ut nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                </div>
              </Col>
              <Col sm="12" md="3" lg="3">
                <div className="four-grid-video-info">
                  <div className="video-info-title-bg">
                  <div className="video-info-title head-title-icon1">
                    <h6>Perspiciatis unde sed</h6>
                  </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur adipiscing elit, sed do eiusmweod tempor incididunt ut amet labore et doloertre magna aliqua. Ut nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                </div>
              </Col>
            </Row>
            </div>
          </Container>
        

      {/* First Modal  */}
      <Modal
                size="lg"
                isOpen={modal}
                toggle={toggle}
                className={className}
              >
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/sKJ4i7p-o-4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen title="video iframe"
                  ></iframe>
                </ModalBody>
              </Modal>
    </div>
  )
}

export default VideoSection
