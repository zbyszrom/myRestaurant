import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getImages = graphql`
query  {
    mealImages: allFile(filter: {relativeDirectory: {eq: "homeGallery"}}, sort: {fields: childImageSharp___fluid___originalName}) {
      edges {
        node {
          childImageSharp {
            fluid{
                ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Gallery = ()=>{

    const data = useStaticQuery(getImages)
    const meals = data.mealImages.edges

    return(
        <section>
            <div>
                <Img fluid = {meals[0].node.childImageSharp.fluid}/>
                <p>awsome pizza </p>
            </div>
            <div>
                <Img fluid = {meals[1].node.childImageSharp.fluid}/>
                <p>awsome pork</p>
            </div>
            <div>
                <Img fluid = {meals[2].node.childImageSharp.fluid}/>
                <p>awsome steak</p>
            </div>
        </section>
        
    )
}
export default Gallery