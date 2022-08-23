import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import NavigationBar from '../components/NavigationBar'
import HomePage from '../pages/home';
import LoginPage from '../pages/login/';
import CreateAccountPage from '../pages/create-account/';
import MyFavoritesPage from '../pages/my_favorites'
import NotAuthorized from '../pages/not_authorized'

const AppRoutes = () => {

  const state = useSelector((state) => state.login);

  return (
    <AnimatePresence>      
      <NavigationBar /> 
        <Routes>
          <Route exact path="/homepage" element={<HomePage />}/>
          <Route exact path="/" element={<LoginPage />}/>
          <Route exact path="/create_account" element={<CreateAccountPage />}/>
          { 
          state.token ? 
            <Route exact path="/my_favorites" element={<MyFavoritesPage />}/> 
            :
            <Route exact path="/my_favorites" element={<NotAuthorized />}/> 
            
          }
        </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;