import React from "react"
import {graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { data } from "remark"

export default function Home({data}) {
  
  return (
    <Layout>
      <section className={styles.header}>      
          <div>
            <h2>Design</h2>
            <h3>Develop & Deploy</h3>
            <p>UX designer & web developer based in world.</p>
            <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
          </div>     
          
          
          <GatsbyImage image={getImage(data.file)} alt="Banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: { eq: "banner.png" }) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }
}
`