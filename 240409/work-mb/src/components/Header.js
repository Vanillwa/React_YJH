import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";
import { logoutUser } from "../api/api";

function Header() {
	const navigate = useNavigate();
	const { memoUserInfo, logout } = useAuthContext()
	const { userInfo, isLoggedIn } = memoUserInfo

	const handleLogout = () => {
		logout()
		logoutUser()
		navigate('/')
	}
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="/">React</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/post/list">Post</Nav.Link>
					<Nav.Link as={Link} to="/chat/list">Chat</Nav.Link>
				</Nav>
				<Nav>
					{
						isLoggedIn ?
							<NavDropdown title={userInfo.username} id="dropdown-button-drop">
								<NavDropdown.Item href="#">MyPage</NavDropdown.Item>
								<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
							</NavDropdown> :
							<>
								<Nav.Link as={Link} to="/auth/login">Login</Nav.Link>
								<Nav.Link as={Link} to="/auth/join">Join</Nav.Link>
							</>
					}
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Header