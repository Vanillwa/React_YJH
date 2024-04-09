import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";
import { useAuthContext } from "../../context/AuthContext";


function Login() {
	const navigate = useNavigate();
	const { login } = useAuthContext()

	const fetchData = useMutation(async (body) => {
		return await loginUser(body)
	}, {
		onSuccess: (data) => {
			if (data.message === 'success') {
				login(data.userInfo)
				navigate('/')
			} else if (data.message === 'NoExist') {
				alert('존재하지 않는 계정입니다.')
				return
			} else if (data.message === 'PwdFail') {
				alert('비밀번호가 일치하지 않습니다.')
				return
			}
		}
	})

	const handleLogin = async (e) => {
		e.preventDefault()
		let username = e.target.username.value
		let password = e.target.password.value

		let body = { username, password }
		fetchData.mutate(body)
	}

	return (
		<>
			<h3>Login</h3>
			<form onSubmit={handleLogin}>
				<div>
					<label htmlFor="username">Username</label>
					<input name="username" id="username" required></input>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" autoComplete="none" required></input>
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</>
	)
}

export default Login