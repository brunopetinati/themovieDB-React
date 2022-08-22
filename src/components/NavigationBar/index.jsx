import { useNavigate } from "react-router-dom";
import { NavigationBarStyle, NavigationBarButton } from "./styles";

const NavigationBar = () => {

	const navigate = useNavigate(); 

	return (
    
	<NavigationBarStyle>

		<NavigationBarButton onClick={() => navigate("/") }>Home</NavigationBarButton>
		<NavigationBarButton onClick={() => navigate("/my_favorites") }>Favorites</NavigationBarButton>
		<NavigationBarButton onClick={() => navigate("/login") }>Login</NavigationBarButton>
		<NavigationBarButton onClick={() => navigate("/create_account") }>Create Account</NavigationBarButton>

	</NavigationBarStyle>)
}

export default NavigationBar;