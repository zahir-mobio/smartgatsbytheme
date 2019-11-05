/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import "bootstrap/scss/bootstrap.scss"
import "remixicon/fonts/remixicon.css"
import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"
import "../../scss/_global.scss"
import Navigation from "../Navbar/"
import Footer from "../Footer"

const Layout = ({ children }) => {
 
  return (
    <>
      <Helmet>
        <html />
        <script src={withPrefix("external/common.js")} defer={true}></script>
      </Helmet>
      <div>
<Navigation/>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
