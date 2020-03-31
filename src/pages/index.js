import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Info from '../components/info'
import Gallery from '../components/gallery'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Info />
    <Gallery />
  </Layout>
)

export default IndexPage
