import { MOST_POPULAR, KIDS, DRAMA, SCI_FY, NOW_ON_THE_CINEMA, BEST_OF_2022 } from './urls'


const genresObject = [
  {
    'title':'Populares',
    'url': MOST_POPULAR,
    'index': 0
  },
  {
    'title':'KIDS',
    'url': KIDS,
    'index': 1
  },
  {
    'title':'Dramas',
    'url': DRAMA,
    'index': 2
  },
  {
    'title':'Ficção Científica',
    'url': SCI_FY,
    'index': 3
  },
  {
    'title':'Você também pode gostar',
    'url': NOW_ON_THE_CINEMA,
    'index': 4
  },
  {
    'title':'Melhores de 2022',
    'url': BEST_OF_2022,
    'index': 5
  }
]

export default genresObject;