import React from 'react'

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'

import NextHead from 'components/utils/NextHead'
import Header from 'components/utils/Header'

interface Props {
  children: React.ReactNode
  pageTitle: string
}

const LayoutDefault: React.FC<Props> = ({ children, pageTitle }) => {
  const classes = useStyles()
  return (
    <>
      <NextHead title={pageTitle} />
      <Header />
      <Grid
        container
        className={classes.root}
        alignItems="center"
        justify="center"
        component="main"
      >
        <Grid item className={classes.main}>
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default LayoutDefault

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      color: theme.palette.getContrastText(theme.palette.background.default),
      height: 'calc(100vh - 64px)',
    },
    main: {
      maxWidth: theme.breakpoints.values.lg,
      width: '100%',
      height: '100%',
      padding: `${theme.spacing(3)}px 0px`,
    },
  })
)
