import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"
export default function Home() {
  return (
    <Layout pageTitle="Welcome">
      <Header
        className="fullPageHeader mb-0 p-0 position-fixed w-100"
        contentPage={false}
      >
        <h1 className="display-4 text-dark text-center font-weight-bold">
          Welcome
        </h1>
        <h2 className="text-center text-dark">SITE UNDER DEVELOPMENT </h2>
      </Header>
    </Layout>
  )
}
