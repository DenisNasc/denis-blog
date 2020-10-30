import React from 'react'
import { NextPage } from 'next'

interface PropsHome {
  blogCategory: string
}

const Home: NextPage<PropsHome> = ({ blogCategory }) => {
  return (
    <div>
      <main>{blogCategory}</main>

      <footer>FOOTER</footer>
    </div>
  )
}

export default Home

Home.getInitialProps = () => {
  return {
    blogCategory: 'Books',
  }
}
