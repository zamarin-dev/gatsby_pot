import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Button } from '@material-ui/core';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="design.jpg" alt="gatsby-astronaut"/>
    </div>
    <h1>Hi people</h1>
    
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>編集が反映されているか確認<span class="material-icons">
    alarm_on
</span></p>
    <Button color="primary">material ui button</Button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="gatsby-astronaut.png" alt="gatsby-astronaut"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/page-3/">Go to page 3</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
