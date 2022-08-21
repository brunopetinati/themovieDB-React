import Routes from "./routes/index"
import { useEffect } from "react"
import { DefaultContainer } from "./constants/global_styles"
import Modal from 'react-modal'

//provavelmente linha a seguir poderá ser deletada
Modal.setAppElement('#root')

function App() {
  document.title = "The Movie DB - A Creation with React"
  
  return (
      <Routes />
  );
}

export default App;
