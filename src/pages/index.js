import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>Woorld</h2>
      <p>
        This is next to a link <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
