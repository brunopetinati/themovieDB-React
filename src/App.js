import AppRoutes from "./routes"
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
  document.title = "The Movie DB - A Creation with React"
  
  return (
      <AppRoutes />
  );
}

export default App;
