import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { NavigationBarStyle, NavigationBarButton } from "./styles";

const NavigationBar = () => {

	const navigate = useNavigate(); 
  const state = useSelector((state) => state.login);
	
	return (
    
	<NavigationBarStyle>

		<NavigationBarButton onClick={() => navigate("/home") }>Home</NavigationBarButton>
		{state.token && <NavigationBarButton onClick={() => navigate("/my_favorites") }>Favoritos</NavigationBarButton>}
		<NavigationBarButton onClick={() => navigate("/") }>Login</NavigationBarButton>
		<NavigationBarButton onClick={() => navigate("/create_account") }>Criar Conta</NavigationBarButton>

	</NavigationBarStyle>)
}

export default NavigationBar;