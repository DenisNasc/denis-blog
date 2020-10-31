import React from 'react'

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'

import CardArticle from 'components/atoms/CardCategorie'

const categoriesAndArticles = {
  0: [
    {
      categorieId: 'matematica',
      subCategorieId: 'calculo-2',
      subCategorieTitle: 'Cálculo II',
      subCategorieImage: 'https://i.imgur.com/MZ04TkZ.png',
    },
    {
      categorieId: 'matematica',
      subCategorieId: 'calculo-3',
      subCategorieTitle: 'Cálculo III',
      subCategorieImage: 'https://i.imgur.com/MZ04TkZ.png',
    },
  ],
  1: [
    {
      categorieId: 'fisica',
      subCategorieId: 'mecanica-classica',
      subCategorieTitle: 'Mecânica Clássica',
      subCategorieImage: 'https://i.imgur.com/MZ04TkZ.png',
    },
    {
      categorieId: 'fisica',
      subCategorieId: 'mecanica-quantica',
      subCategorieTitle: 'Mecânica Quântica',
      subCategorieImage: 'https://i.imgur.com/MZ04TkZ.png',
    },
  ],
  2: [
    {
      categorieId: 'engenharia-naval',
      subCategorieId: 'estruturas-navais-1',
      subCategorieTitle: 'Estruturas Navais I',
      subCategorieImage: 'https://i.imgur.com/MZ04TkZ.png',
    },
    {
      categorieId: 'engenharia-naval',
      subCategorieId: 'estruturas-navais-2',
      subCategorieTitle: 'Estruturas Navais II',
      subCategorieImage: 'https://i.imgur.com/MZ04TkZ.png',
    },
  ],
}

interface Props {
  value: number
  index: number
}

const TabContent: React.FC<Props> = ({ children, value, index, ...props }) => {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...props}
    >
      {value === index &&
        categoriesAndArticles[
          value
        ].map(({ categorieId, subCategorieId, subCategorieTitle, subCategorieImage }) => (
          <CardArticle
            key={subCategorieId}
            categorieId={categorieId}
            subCategorieId={subCategorieId}
            subCategorieTitle={subCategorieTitle}
            subCategorieImage={subCategorieImage}
          />
        ))}
    </div>
  )
}

export default TabContent

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { display: 'flex', flexWrap: 'wrap' },
  })
)
