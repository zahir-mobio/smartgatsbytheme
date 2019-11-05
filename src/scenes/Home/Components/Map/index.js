import React from "react"
import "./_map.scss"

const Map = props => {
  return (
    <div className="map-wrp">
      <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.1421287614135!2d-117.10675348496467!3d32.73541649341292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954732272c46d%3A0xa97d74b2d28d33c!2sPoplar%20St%2C%20San%20Diego%2C%20CA%2092105%2C%20USA!5e0!3m2!1sen!2sin!4v1571646980960!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" allowFullScreen=""></iframe>
    </div>
  )
}

export default Map
