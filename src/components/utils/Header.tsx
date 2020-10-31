import React from 'react'
import Link from 'next/link'

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

interface Props {}

const Header: React.FC<Props> = () => {
  const classes = useStyles()
  return (
    <AppBar elevation={0} className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <Link href="/">
          <Typography className={classes.typography} component="a" variant="h6">
            I'M DENIS
          </Typography>
        </Link>
        <nav>
          <Link href="/articles">
            <Button component="a">Articles</Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default Header

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    typography: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    toolBar: {
      width: '100%',
      maxWidth: theme.breakpoints.values.md,
      padding: '0px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
)
