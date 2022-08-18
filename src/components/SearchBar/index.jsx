import { useNavigate } from "react-router-dom";
import { HeaderStyle, HeaderButton } from "./styles";

const Header = () => {

	const navigate = useNavigate(); 

	return (
    
	<HeaderStyle>

		<HeaderButton onClick={() => navigate.push("/") }>Home</HeaderButton>
		<HeaderButton onClick={() => navigate.push("/my_favorite_movies") }>My Songs</HeaderButton>
		<HeaderButton onClick={() => navigate.push("/login") }>Login</HeaderButton>
		<HeaderButton onClick={() => navigate.push("/create_account") }>Register</HeaderButton>

	</HeaderStyle>)
}

export default Header;