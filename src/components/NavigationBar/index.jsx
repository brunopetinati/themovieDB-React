import { useNavigate } from "react-router-dom";
import { NavigationBarStyle, NavigationBarButton } from "./styles";

const NavigationBar = () => {

	const navigate = useNavigate(); 

	return (
    
	<NavigationBarStyle>

		<NavigationBarButton onClick={() => navigate.push("/") }>Home</NavigationBarButton>
		<NavigationBarButton onClick={() => navigate.push("/my_favorites") }>Favorites</NavigationBarButton>
		<NavigationBarButton onClick={() => navigate.push("/login") }>Login</NavigationBarButton>
		<NavigationBarButton onClick={() => navigate.push("/create_account") }>Create Account</NavigationBarButton>

	</NavigationBarStyle>)
}

export default NavigationBar;