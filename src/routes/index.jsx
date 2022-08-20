import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import NavigationBar from '../components/NavigationBar'
import HomePage from "../pages/home";
import Login from "../pages/login/";
import CreateAccount from "../pages/create-account/";



const appRoutes = () => {

  return (
    <AnimatePresence>      
      <NavigationBar /> 
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
        </Routes>
    </AnimatePresence>
  );
};

export default appRoutes;