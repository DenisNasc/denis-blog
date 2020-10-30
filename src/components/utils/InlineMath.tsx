import React from 'react'
import katex from 'katex'

interface Props {
  children: string
}

const InlineMath: React.FC<Props> = ({ children }) => {
  const html = katex.renderToString(children, {
    displayMode: false,
    strict: false,
  })

  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export default InlineMath
