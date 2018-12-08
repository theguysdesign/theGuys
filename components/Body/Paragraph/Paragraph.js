/** @jsx jsx */
import { jsx } from '@emotion/core'
import ParagraphHeader from './ParagraphHeader'
import ParagraphText from './ParagraphText'

const Paragraph = (props, { children }) => (
  <>
    <ParagraphHeader title={props.title} {...props} />
    <ParagraphText {...props}>
      {children}
    </ParagraphText>
  </>
)

export default Paragraph
