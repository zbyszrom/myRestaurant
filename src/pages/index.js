import React from "react"
import { Link } from "gatsby"
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
    <h1>Eatery</h1>
    <h3>55 Main Street- Santa Monica, CA</h3>
    <Link to = '/menu'>menu</Link>
    <Info />
    <Gallery />
  </Layout>
)

export default IndexPage
