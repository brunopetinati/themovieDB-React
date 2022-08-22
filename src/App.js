import Routes from "./routes/index"
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
  document.title = "The Movie DB - A Creation with React"
  
  return (
      <Routes />
  );
}

export default App;
