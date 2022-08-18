import Routes from "./routes/index"
import { useEffect } from "react"
import { DefaultContainer } from "./constants/global_styles"

function App() {
  
  useEffect(() => {
    document.title = "The Movie DB - A Creation with React"
  }, []);
  
  return (
      <Routes />
  );
}

export default App;
