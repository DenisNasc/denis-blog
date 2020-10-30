import React from 'react'
import { NextPage } from 'next'

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

interface PropsLayoutPost {
  children: React.ReactNode
  postTitle: string
}

const LayoutPost: NextPage<PropsLayoutPost> = ({ children, postTitle }) => {
  const classes = useStyles()
  return (
    <Paper elevation={0} className={classes.root}>
      <h1 className={classes.title}>{postTitle}</h1>
      <article className={classes.content}>{children}</article>
    </Paper>
  )
}

export default LayoutPost

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      maxHeight: '100vh',
      overflowY: 'scroll',
      width: '100%',
      borderRadius: '0px',
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: '0px',
      padding: '0px',
    },
    content: {
      textAlign: 'justify',
      fontSize: '20px',
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.getContrastText(theme.palette.background.default),
    },
  })
)
