/** @jsx jsx */
import { jsx, Global } from '@emotion/core'
import Head from 'next/head'
import Colors from '../design/colors'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

const Layout = ({ children }) => (
  <>
    <Global styles={{
      '*': {
        boxSizing: 'border-box',
        overflow: 'scroll'
      },
      body: {
        backgroundColor: `${Colors.secondary}`,
        color: `${Colors.primary}`,
        margin: 0,
        padding: 0,
        fontFamily: '"Fira Sans", sans-serif',
        fontSize: 18,
        fontWeight: 300,
        lineHeight: 1.4,
        letterSpacing: 0.0625,
        fontFeatureSettings: 'kern',
        textRendering: 'optimizeLegibility'
      },
      a: {
        fontWeight: 100,
        textDecoration: 'none',
        color: Colors.gray,
        cursor: 'pointer',
        transform: 'scale(1, 1)',
        transition: 'all 0.4s',
        '&:hover': {
          color: Colors.pink,
          transform: 'scale(1.05, 1.05)'
        }
      }
    }}
    />
    <Head>
      <title>Serverless Web Development | theGuys™</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
    </Head>
    <Navigation />
    {children}
    <Footer />
  </>
)

export default Layout
