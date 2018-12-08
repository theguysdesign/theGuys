/** @jsx jsx */
import { jsx } from '@emotion/core'
import { H1 } from '../../../design/headings'

const ParagraphHeader = props => (
  <H1 title={props.title} {...props}>
    {props.title}
  </H1>
)

export default ParagraphHeader
