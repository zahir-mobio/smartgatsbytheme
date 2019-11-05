import React from "react"
import { Row, Container, Col } from "reactstrap"
import "./_pricingplans.scss"

const PricingPlans = props => {
  return (
    <div>
      <div className="gray-bg pricing-plan-wrp">
        <Container>
          <div className="position-relative bg-zprop">
          <div className="bg-white pricing-shadow py-5">
            <Row>
              <Col xs={{size:11, offset:1}} sm={{size:11, offset:1}} md={{size:11, offset:1}} lg={{size:11, offset:1}} className="mx-auto">
                <div className="text-center  pb-3">
                  <h2>Pricing Plans</h2>
                  </div>
                  <div className="text-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                    duis.
                  </p>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col xs={{size:11, offset:1}} sm={{size:11, offset:1}} md={{size:5, offset:1}} lg={{size:5, offset:1}}>
                <div className="plan-beginner border-right mt-2 pr-2 py-2">
                    <div className="beginner-heading">
                        <h4>Beginner</h4>
                        <h3><span><sup>$</sup><span>18</span>/ month</span></h3>
                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur adipiscing elit, sed do eiusmweod tempor incididunt ut amet labore consectetur adipiscing elit.</p>
                    </div>
                    <div className="bullet-list-styled">
                        <ul>
                            <li>1 Free Domain</li>
                            <li>10 GB Storage</li>
                            <li>E-mail Support</li>
                            <li>CRM Integration</li>
                            <li>Web & Mobile App</li>
                            <li>All New Updates</li>
                        </ul>
                    </div>
                    <a href="/" className="btn-secondary d-inline-block" aria-label="get started btn">
                    Get Started
                    </a>
                </div>
              </Col>
              <Col xs={{size:11, offset:1}} sm={{size:11, offset:1}} md={{size:5 , offset:0 }} lg={{size:5, offset:0}}>
              <div className="plan-professional mt-2 pt-3 pr-2  pb-4">
              <div className="professional-heading">
                        <h4>Professional</h4>
                        <h3><span><sup>$</sup><span>38</span>/ month</span></h3>
                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet, lorem mistawken consectetur adipiscing elit, sed do eiusmweod tempor incididunt ut amet labore consectetur adipiscing elit.</p>
                    </div>
                    <div className="bullet-list-styled">
                        <ul>
                            <li>10 Free Domain</li>
                            <li>Unlimited Storage</li>
                            <li>24/7 Support</li>
                            <li>CRM Integration</li>
                            <li>Web & Mobile App</li>
                            <li>All New Updates</li>
                        </ul>
                    </div>
                    <a href="/" className="btn-primary d-inline-block" aria-label="get started btn">
                    Get Started
                    </a>
                    </div>
              </Col>
            </Row>
            
            </div>
            <div className="bg-effect left-bottom"></div>
          </div>
        </Container>
        
      </div>
    </div>
  )
}

export default PricingPlans
