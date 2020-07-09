import React from "react"
import { stringToSlug } from "../utils/utils"
// import { Link } from "gatsby"

import OtherServices from "../components/Customized/OtherServices/OtherServices"
import BannerCarousel from "../components/Customized/Banners/BannerCarousel"
import HowItWorks from "../components/Customized/HowItWorks/HowItWorks"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "C.A.C. Da Silva Construções"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Início"
          keywords={
            [
              `pré moldados`, 
              `casa`,
              `construção`, 
              `cachoeira do sul`, 
              `obra`,
              `material de construção`,
            ]
          }
        />
        <div className="mt-20">
          <BannerCarousel />
        </div>


        <div className="py-10 container" id={stringToSlug("Como Funciona")}>
          <HowItWorks
            title="Como Funciona"
            subtitle="Conheça os processos até você ter sua casa nova"
            textColor="#021b3d"
            backgroundColor="#FFF"
          />
        </div>

        <OtherServices 
          title="Outros Serviços"
          subtitle="Conheça outros serviços que oferecemos"
          textColor="#021b3d"
          backgroundColor="#FFF"
        />        
        {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link> */}
      </Layout>
    )
  }
}

export default IndexPage
