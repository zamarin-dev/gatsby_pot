import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Button } from '@material-ui/core';
import click_jouro from "../components/jouro_drag";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="design.jpg" alt="gatsby-astronaut"/>
    </div>
    <h1>Hi people</h1>
    
    <p>温度: (データベースから最新の温度取得)℃</p>
    <p>湿度: (データベースから最新の湿度取得)％</p>
    <p>編集が反映されているか確認</p>
    <Button variant="outlined" color="primary">
      温度
    </Button>
    <Button variant="outlined" color="primary">
      湿度
    </Button>
      <span className="material-icons">
        alarm_on
      </span>
    <Button color="primary">material ui button</Button> <br />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <div id="clovar">
      <Image filename="clover_itsutsuba.png" alt="clovar_itsutsuba"/>
      </div>
    </div>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <div id="jouro" onClick = {() => click_jouro("aaaa")}>　
      <Image filename="gardening_jouro.png" alt="gardening_jouro"/>
      </div>
    </div>

    {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="gatsby-astronaut.png" alt="gatsby-astronaut"/>
    </div> */}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/page-3/">Go to page 3</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
