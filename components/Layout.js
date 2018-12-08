/** @jsx jsx */
import { jsx, Global } from '@emotion/core'
import Head from 'next/head'
import Navigation from './Navigation/Navigation.js'
import { Menu, MenuHeader, MenuLink } from './Menu/Menu.js'
import Body from './Body/Body.js'
import Footer from './Footer/Footer.js'

const Layout = ({ children }) => (
  <div css={{ backgroundColor: 'white', color: 'black' }}>
    <Global styles={{
      '*': {
        boxSizing: 'border-box'
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily: '"Fira Sans", sans-serif',
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 1.3,
        letterSpacing: 0.0625,
        fontFeatureSettings: 'kern',
        textRendering: 'optimizeLegibility'
      },
      a: {
        textDecoration: 'none',
        color: 'rgb(20,20,20)',
        transition: 'all 0.6s',
        '&:hover': {
          color: 'rgba(240,50,120, 1)',
          textShadow: '0px 0px 1px rgba(0,0,0,0.4)'
        }
      }
    }}
    />
    <Head>
      <title>theGuys™ — serverless web development</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
    </Head>
    <Navigation />
    <Menu>
      <MenuHeader title='Menu' />
      <MenuLink id='menu' title='Menu' />
    </Menu>
    <Body />
    <Footer />
    { children }
  </div>
)

export default Layout
