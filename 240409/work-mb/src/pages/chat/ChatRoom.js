import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useQuery } from "react-query";
import { getChatInfo } from "../../api/api";
import { useLayoutEffect, useState } from "react";
import { io } from "socket.io-client";
import styles from "../../css/ChatRoom.module.css"
import { Button } from "react-bootstrap";

function ChatRoom() {
	const navigate = useNavigate();
	const { id } = useParams()
	const { memoUserInfo } = useAuthContext()
	const { isLoggedIn, userInfo } = memoUserInfo
	const [chat, setChat] = useState([])
	const socket = io({withCredentials : true}).connect('http://192.168.5.17:8082')

	const { data, status } = useQuery(['getChatInfo', id], () => getChatInfo(id), {
		retry: 0, refetchOnWindowFocus: false,
		onSuccess: (data) => {
			socket.emit('ask-join', data.roomInfo._id)
			setChat(data.chatlogs)
		}
	})

	const sendMessage = (e) => {
		e.preventDefault()
		let message = e.target.message.value
		if (message === '') return
		let body = {
			roomId: data.roomInfo._id,
			message: message.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;"),
			date: new Date().toLocaleString()
		}
		socket.emit("send-message", body);
		e.target.message.value = ''
	}

	socket.on('send-message', (data) => {
		setChat((prev) => [...prev, data])
	})

	useLayoutEffect(() => {
		if (!isLoggedIn) {
			alert('로그인 후 사용하실 수 있는 기능입니다.')
			navigate('/auth/login')
		}
	}, [isLoggedIn])

	if (status === 'loading') {
		return (
			<div>로딩중</div>
		)
	}
	if (status === "error") {
		return (
			<div>에러</div>
		)
	}

	return (
		<div>
			Room ID : {data.roomInfo._id}
			<div className={styles.chatScreen}>
				{
					chat.map((message, i) => {
						return (
							<div key={i} className={message.user.id == userInfo.userId ? styles.mine : null}>
								{message.user.username} | {message.message}
							</div>
						)
					})
				}
			</div>
			<form className={styles.chatForm} onSubmit={sendMessage}>
				<input name="message" />
				<Button variant="secondary btn-sm" type="submit">전송</Button>
			</form>
		</div>
	)
}

export default ChatRoom