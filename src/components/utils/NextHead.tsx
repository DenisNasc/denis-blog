import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
}

const NextHead: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default NextHead
