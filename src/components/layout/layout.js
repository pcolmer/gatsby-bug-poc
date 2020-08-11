import React from "react"
import "../../styles/theme.scss"
import { Helmet } from "react-helmet"
const Layout = props => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.pageTitle}</title>
    </Helmet>
    {props.children}
  </>
)

export default Layout
