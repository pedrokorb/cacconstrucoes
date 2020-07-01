import React from "react"

import { Link } from "gatsby";
import styled from "styled-components";
import NavBar from "./Customized/NavBar";
import Footer from "./Customized/Footer";
import Contact from "./Customized/Contact";

import { rhythm, scale } from "../utils/typography"

import "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const phone = '5555996737066'
    const target = 'fazer meu site personalizado'
    const message = `Olá, vi seu anúncio no site ${title} e gostaria de mais informações sobre ${target}.`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <NavBar />
          <main>{children}</main>
        </div>

        <Contact />
        
        <Footer
          logoLink={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`
export default Layout
