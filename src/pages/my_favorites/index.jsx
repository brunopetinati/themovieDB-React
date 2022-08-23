import { motion } from 'framer-motion'
import { Container } from './styles'


const MyFavoritesPage = () => {
  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Container>
      <h3>Muito obrigado por logar na plataforma. Essa página ainda está em construção.</h3>
      <p>Mas em breve será possível ter sua própria lista de filmes favoritos salvos bem neste lugarzinho!</p>
    </Container>
  </motion.div>
  )
};

export default MyFavoritesPage;