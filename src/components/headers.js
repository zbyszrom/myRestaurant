import React from 'react'
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
        <h2>This is a home header</h2>
        </BackgroundImage>
    )
    }
const AboutHeader = ()=>{

    const data = useStaticQuery(getImages)
    const backgrounds = data.bgImages.edges

    return(
        <BackgroundImage fluid = {backgrounds[0].node.childImageSharp.fluid}>
        <h2>This is about header</h2>
        </BackgroundImage>
    )
}
const MenuHeader = ()=>{

    const data = useStaticQuery(getImages)
    const backgrounds = data.bgImages.edges

    return(
        <BackgroundImage fluid = {backgrounds[3].node.childImageSharp.fluid}>
        <h2>This is menu header</h2>
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