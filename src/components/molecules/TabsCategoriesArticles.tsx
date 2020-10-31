import React from 'react'

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'

const tabsData = [
  { id: 0, label: 'Matemática', color: 'blue' },
  { id: 1, label: 'Física', color: 'red' },
  { id: 2, label: 'Engenharia Naval', color: 'grey' },
]

const TabsCategoriesArticles = ({ value, handleChange }) => {
  const classes = useStyles()

  const a11yProps = (id: string | number) => ({
    id: `vertical-tab-${id}`,

    'aria-controls': `vertical-tabpanel-${id}`,
  })

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      TabIndicatorProps={{ className: classes.tabIndicator }}
    >
      {tabsData.map(({ id, label, color }) => (
        <Tab
          classes={{ selected: classes.tabSelected }}
          className={classes.tab}
          key={label}
          label={label}
          disableRipple
          {...a11yProps(id)}
        />
      ))}
    </Tabs>
  )
}

export default TabsCategoriesArticles

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
      marginBottom: `${theme.spacing(3)}px`,
      '&:hover': {
        background: 'rgba(0,0,0,0.2)',
      },
    },
    tabSelected: {
      background: 'red',
      color: theme.palette.getContrastText('#ff0000'),
    },
    tabIndicator: {
      display: 'none',
    },
  })
)
