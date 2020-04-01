import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const getImages = graphql `
query  {
  bgImages: allFile(filter: {relativeDirectory: {eq: "bcg"}}, sort: {fields: childImageSharp___fluid___originalName}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          id
        }
      }
    }
  }
}
`  



const HomeHeader = ()=>{

    const data = useStaticQuery(getImages)
    const backgrounds = data.bgImages.edges

    return(
        <BackgroundImage fluid = {backgrounds[2].node.childImageSharp.fluid}>
        <h1>Eatery</h1>
        <h3>55 Main Street- Santa Monica, CA</h3>
        <Link to = '/menu'>menu</Link>
        </BackgroundImage>
    )
    }
const AboutHeader = ()=>{

    const data = useStaticQuery(getImages)
    const backgrounds = data.bgImages.edges

    return(
        <BackgroundImage fluid = {backgrounds[0].node.childImageSharp.fluid}>
        <h1>About us</h1>
        <h3>a little about us</h3>
        </BackgroundImage>
    )
}
const MenuHeader = ()=>{

    const data = useStaticQuery(getImages)
    const backgrounds = data.bgImages.edges

    return(
        <BackgroundImage fluid = {backgrounds[3].node.childImageSharp.fluid}>
            <h1>Our Menu</h1>
            <h3>Let's dig in</h3>
        </BackgroundImage>
    )
}
const ContactHeader = ()=>{

    const data = useStaticQuery(getImages)
    const backgrounds = data.bgImages.edges

    return(
        <BackgroundImage fluid = {backgrounds[1].node.childImageSharp.fluid}>
        <h2>This contact header</h2>
        </BackgroundImage>
    )
}


export {HomeHeader, AboutHeader, MenuHeader, ContactHeader}