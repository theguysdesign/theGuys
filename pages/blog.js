/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Layout from '../components/Layout'
import MenuSegment from '../components/Menu/MenuSegment'
import MenuHeader from '../components/Menu/MenuHeader'
import MenuLink from '../components/Menu/MenuLink'
import Body from '../components/Body/Body'
import ParagraphHeader from '../components/Body/Paragraph/ParagraphHeader'
import ParagraphText from '../components/Body/Paragraph/ParagraphText'

export default ({ children }) => (
  <Layout>
    <div css={css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 10vh;
    `}
    >
      <MenuSegment>
        <MenuHeader title='First' />
        <MenuLink id='one' title='One' />
        <MenuLink id='two' title='Two' />
        <MenuLink id='three' title='Three' />
        <MenuHeader title='Second' />
        <MenuLink id='uno' title='Uno' />
        <MenuLink id='dos' title='Dos' />
        <MenuLink id='tres' title='Tres' />
      </MenuSegment>
      <Body>
        <ParagraphHeader title='First post.' primary />
        <ParagraphText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat. Cursus eget nunc scelerisque viverra mauris. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Purus faucibus ornare suspendisse sed nisi lacus sed. A cras semper auctor neque vitae. Netus et malesuada fames ac turpis egestas maecenas. Dui faucibus in ornare quam viverra orci sagittis. Libero justo laoreet sit amet cursus. Egestas maecenas pharetra convallis posuere morbi leo urna. Sollicitudin nibh sit amet commodo. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Habitant morbi tristique senectus et netus et malesuada. Elit duis tristique sollicitudin nibh sit. Consequat interdum varius sit amet mattis vulputate enim nulla. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Quis blandit turpis cursus in hac habitasse. Mus mauris vitae ultricies leo. Tincidunt ornare massa eget egestas purus.

        </ParagraphText>
      </Body>
    </div>
    { children }
  </Layout>
)
