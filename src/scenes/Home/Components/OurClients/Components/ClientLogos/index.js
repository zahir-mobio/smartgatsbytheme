import React from "react"
import { Row, Container, Col } from "reactstrap"
import "./_ourclient.scss"
import ClientOne from "../../../Imagecomponents/ClientOne"
import ClientTwo from "../../../Imagecomponents/ClientTwo"
import ClientThree from "../../../Imagecomponents/ClientThree"
import ClientFour from "../../../Imagecomponents/ClientFour"
import ClientFive from "../../../Imagecomponents/ClientFive"
import ClientSix from "../../../Imagecomponents/ClientSix"
import ClientSeven from "../../../Imagecomponents/ClientSeven"
import ClientEight from "../../../Imagecomponents/ClientEight"
import ClientNine from "../../../Imagecomponents/ClientNine"
import ClientTen from "../../../Imagecomponents/ClientTen"
import TestimonialSlider from "../TestimonialSlider"

const OurClients = props => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="Our-clients py-5">
              <div className="text-center">
                <h2>Our Clients</h2>
              </div>
              <div className="bullet-list-styled">
                <ul>
                <li><ClientOne/></li> 
                <li><ClientTwo/></li>
                <li><ClientThree/></li>
                <li><ClientFour/></li>
                <li><ClientFive/></li>
                <li><ClientSix/></li>
                <li><ClientSeven/></li>
                <li><ClientEight/></li>
                <li><ClientNine/></li>
                <li><ClientTen/></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <TestimonialSlider/>
    </div>
  )
}

export default OurClients
