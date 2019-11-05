import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import HomePage from "../scenes/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage></HomePage>
  </Layout>
)

export default IndexPage
