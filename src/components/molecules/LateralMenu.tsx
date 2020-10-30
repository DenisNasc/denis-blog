import React from 'react'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'

import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

interface Props {
  topics: { name: string; subTopics: string[] }[]
}

const LateralMenu: React.FC<Props> = ({ topics }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>SUMÁRIO</Typography>

      <List className={classes.list} component="nav">
        {topics.map(({ name, subTopics }) => (
          <>
            <ListItem className={classes.listItem} button>
              <ListItemText primary={name} />
            </ListItem>

            {subTopics.length ? (
              <ListItem className={classes.listItem}>
                <List className={classes.listNested} component="div" disablePadding>
                  {subTopics.map(e => (
                    <ListItem className={classes.listItem} button>
                      <ListItemText primary={e} />
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            ) : null}
          </>
        ))}
      </List>
    </div>
  )
}

export default LateralMenu

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      background: theme.palette.background.default,
      color: theme.palette.getContrastText(theme.palette.background.default),
      paddingTop: theme.spacing(3),
    },
    title: {
      width: '100%',
      textAlign: 'center',
    },
    list: { width: '100%' },
    listItem: { width: '100%' },
    listNested: { width: '100%' },
  })
)
