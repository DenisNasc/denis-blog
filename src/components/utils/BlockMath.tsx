import React from 'react'
import katex from 'katex'

interface Props {
  children: string
}

const BlockMath: React.FC<Props> = ({ children }) => {
  const html = katex.renderToString(children, {
    displayMode: true,
    strict: false,
  })

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default BlockMath
