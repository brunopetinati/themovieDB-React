import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import NavigationBar from '../components/NavigationBar'
import HomePage from '../pages/home';
import LoginPage from '../pages/login/';
import CreateAccountPage from '../pages/create-account/';
import MyFavoritesPage from '../pages/my_favorites'



const appRoutes = () => {

  return (
    <AnimatePresence>      
      <NavigationBar /> 
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/login" element={<LoginPage />}/>
          <Route exact path="/create_account" element={<CreateAccountPage />}/>
          <Route exact path="/my_favorites" element={<MyFavoritesPage />}/>
        </Routes>
    </AnimatePresence>
  );
};

export default appRoutes;