import React from "react"

import Layout from "../components/layout"
import Info from '../components/info'
import Gallery from '../components/gallery'
//import BackgroundImage from 'gatsby-background-image'
import {HomeHeader} from '../components/headers'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader/>
    <Info />
    <Gallery />
  </Layout>
)

export default IndexPage
