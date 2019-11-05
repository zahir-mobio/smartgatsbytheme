import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const FeatureImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/featureimg.png" }) {
        childImageSharp {
          fluid(maxWidth: 649) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Feature image"
    />
  )
}

export default FeatureImg
