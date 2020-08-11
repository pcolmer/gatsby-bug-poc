import React from "react"
import "../../styles/theme.scss"
import UniversalNavBar from "../universal-navbar/universal-navbar"
import { Helmet } from "react-helmet"
const Layout = props => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.pageTitle}</title>
    </Helmet>
    <UniversalNavBar />
    {props.children}
  </>
)

export default Layout
