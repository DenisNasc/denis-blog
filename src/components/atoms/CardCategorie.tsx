import React from 'react'
import { useRouter } from 'next/router'

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core'

interface Props {
  categorieId: string
  subCategorieId: string
  subCategorieTitle: string
  subCategorieImage: string
}

const CardCategorie: React.FC<Props> = ({
  categorieId,
  subCategorieId,
  subCategorieTitle,
  subCategorieImage,
}) => {
  const classes = useStyles({ subCategorieImage })
  const router = useRouter()

  return (
    <Card
      className={classes.root}
      onClick={() => router.push(`/articles/${categorieId}/${subCategorieId}`)}
    >
      <CardActionArea className={classes.actionArea}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
            {subCategorieTitle.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardCategorie

const useStyles = makeStyles((theme: Theme) =>
  createStyles<any, { subCategorieImage: string }>({
    root: {
      margin: theme.spacing(3),
      minWidth: '250px',
      minHeight: '300px',
      flexGrow: 1,
      backgroundImage: props => `url(${props.subCategorieImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionArea: {
      height: '100%',
    },
    typography: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      margin: '0px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  })
)
