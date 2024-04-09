import { useMutation } from "react-query"
import { joinUser } from "../../api/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Join() {
	const navigate = useNavigate();
	const [usernameAlert, setUsernameAlert] = useState(false)
	const [passwordAlert, setPasswordAlert] = useState(false)

	const fetchData = useMutation(async (body) => {
		return await joinUser(body)
	}, {
		onSuccess: (data) => {
			if(data === 'duplicated'){
				alert('중복된 username입니다.')
				return
			}else if(data === 'success'){
				alert('회원가입에 성공했습니다.')
				navigate('/auth/login')
			}
		}
	})

	const handleJoin = async (e) => {
		e.preventDefault()
		let username = e.target.username.value
		let password = e.target.password.value
		
		let body = { username, password }
		fetchData.mutate(body)
	}

	return (
		<>
			<h3>Join</h3>
			<form onSubmit={handleJoin}>
				<div>
					<label htmlFor="username">Username</label>
					<input name="username" id="username" required></input>
				</div>
				<div className={usernameAlert ? 'show' : null}></div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" autoComplete="none" required></input>
				</div>
				<div>
					<button type="submit">Join</button>
				</div>
			</form>
		</>
	)
}

export default Join