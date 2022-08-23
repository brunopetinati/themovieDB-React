import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { Container } from './styles'


const NotAuthorized = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/create_account');
  };

  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
    <Container>
      <h1>Acesso restrito ¯\_(ツ)_/¯</h1>
      <p>Seu acesso não foi autorizado</p>
      <p>Para ter acesso a essa área, é necessário logar primeiro.</p>
      <p>Se você não tem uma conta ainda, pode criar uma clidando <a href="" onClick={() => handleClick()}>aqui</a></p>
    </Container>
  </motion.div>
  )
};

export default NotAuthorized;
