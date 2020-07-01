import React from "react"
// import { Link } from "gatsby"

import OtherServices from "../components/Customized/OtherServices/OtherServices"
import BannerCarousel from "../components/Customized/Banners/BannerCarousel"
import HowItWorks from "../components/Customized/HowItWorks/HowItWorks"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="mt-20">
          <BannerCarousel />
        </div>


        <div className="py-10">
          <HowItWorks
            title="Como Funciona"
            subtitle="Conheça os processos até você ter sua casa nova"
          />
        </div>

        <OtherServices 
          title="Outros Serviços"
          subtitle="Conheça outros serviços que oferecemos"
        />        
        {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link> */}
      </Layout>
    )
  }
}

export default IndexPage
