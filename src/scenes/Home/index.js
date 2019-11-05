import React from "react"
import SliderHome from "./Components/Slider"
import VideoSection from "./Components/VideoSection"
import Howitworks from "./Components/Howitworks"
import Feature from "./Components/Features"
import Pricingplan from "./Components/PricingPlans"
import OurClients from "./Components/OurClients/Components/ClientLogos"
import Map from "./Components/Map"
import Contact from "./Components/ContactUs"
import OurBlog from "./Components/OurBlog/"

const Home = () => (
  <>
  <SliderHome></SliderHome>
  <VideoSection/>
  <Howitworks/>
  <Feature/>
  <Pricingplan/>
  <OurClients/>
  <OurBlog/>
  <Map/>
  <Contact/>
  </>
)

export default Home
