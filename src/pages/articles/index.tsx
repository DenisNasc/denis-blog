import React, { useState } from 'react'
import { NextPage } from 'next'

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

import LayoutDefault from 'style/layouts/LayoutDefault'
import TabsCategoriesArticles from 'components/molecules/TabsCategoriesArticles'
import TabsContent from 'components/cells/TabsContent'

interface Props {}

const Articles: NextPage<Props, any> = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  console.log(value)
  return (
    <LayoutDefault pageTitle="Articles">
      <Grid className={classes.root} container spacing={3}>
        <Grid container item xs={3}>
          <Paper className={classes.categories}>
            <TabsCategoriesArticles value={value} handleChange={handleChange} />
          </Paper>
        </Grid>

        <Grid container item xs={9}>
          <Paper className={classes.categoriesContent}>
            {['1', '2', '3'].map((e, index) => (
              <TabsContent key={e} value={value} index={index}>
                {e}
              </TabsContent>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </LayoutDefault>
  )
}

export default Articles

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
    },
    categories: {
      background: theme.palette.background.paper,
      width: '100%',
      height: '100%',
      padding: theme.spacing(2),
    },
    categoriesContent: {
      background: theme.palette.background.paper,
      width: '100%',
      height: '100%',
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
  })
)
