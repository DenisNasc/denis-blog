import React from 'react'
import { NextPage } from 'next'

import LayoutDefault from 'style/layouts/LayoutDefault'

interface PropsHome {
  blogCategory: string
}

const Home: NextPage<PropsHome> = ({ blogCategory }) => {
  return (
    <LayoutDefault pageTitle="Home">
      <div>HOME</div>
    </LayoutDefault>
  )
}

export default Home

Home.getInitialProps = () => {
  return {
    blogCategory: 'Books',
  }
}
