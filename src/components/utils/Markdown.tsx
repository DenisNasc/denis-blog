import React from 'react'

import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'
import RemarkMathPlugin from 'remark-math'

import BlockMath from 'components/utils/BlockMath'
import InlineMath from 'components/utils/InlineMath'

function mapProps(props) {
  return {
    ...props,
    allowDangerousHtml: false,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      math: ({ value }) => <BlockMath>{value}</BlockMath>,
      inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>,
    },
  }
}

const Markdown: React.FC = ({ children, ...props }: ReactMarkdownProps) => (
  <ReactMarkdown {...mapProps(props)}>{children}</ReactMarkdown>
)

export default Markdown
