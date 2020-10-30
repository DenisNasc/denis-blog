import React from 'react'
import { NextPage } from 'next'
import matter, { GrayMatterFile } from 'gray-matter'

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import LayoutPost from 'style/layouts/LayoutPost'
import Markdown from 'components/utils/Markdown'

import LateralMenu from 'components/molecules/LateralMenu'

interface PropsPost {
  content: string
  data: {
    title: string
  }
}

interface ReturnFromGetInitialProps extends GrayMatterFile<any> {}

const topics = [
  { name: 'Introdução', subTopics: [] },
  { name: 'Conceitos', subTopics: ['Ordem', 'Ordinária x Parcial'] },
  { name: "EDO's lineares de 1ª ordem", subTopics: [] },
]

const Post: NextPage<PropsPost, ReturnFromGetInitialProps> = ({ content, data }) => {
  const classes = useStyles()
  const { title } = data

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.lateralMenu} item xs={2}>
        <LateralMenu topics={topics} />
      </Grid>
      <Grid container item justify="center" xs={10}>
        <LayoutPost postTitle={title}>
          <Markdown>{content}</Markdown>
        </LayoutPost>
      </Grid>
    </Grid>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'aula-1' } }],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const content = await import(`../../posts/${params.slug}.md`)
  const data = matter(content.default)

  return { props: { ...data, orig: null } }
}

export default Post

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { width: '100vw', height: '100vh' },
    lateralMenu: {},
  })
)
