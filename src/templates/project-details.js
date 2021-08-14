import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from '../styles/project-details-module.css'

export default function ProjectDetails({data}) {
    const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData)
    const {html} = data.markdownRemark
    const {title, stack, featuredImg} = data.markdownRemark.frontmatter

    return (
        <Layout className ={styles.details}>
            <div>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className ={styles.featured}>
                <GatsbyImage image={featuredImage} alt="featured" />
                </div>
                <div className ={styles.html} dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </Layout>
        
    )
}

export const query = graphql`
    query ProjectsPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                stack
                title
                featuredImg {
                    childImageSharp {
                        gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                        )
                    }
                }
            }
        }
    }

`