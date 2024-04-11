import { useQuery } from "react-query"
import { useAuthContext } from "../../context/AuthContext"
import { useLayoutEffect } from "react"
import { getChatList } from "../../api/api"
import { useNavigate } from "react-router-dom";

function ChatList() {
	const navigate = useNavigate();
	const { memoUserInfo } = useAuthContext()
	const { isLoggedIn } = memoUserInfo
	const { data, status } = useQuery(['getChatList'], () => getChatList(), { retry: 0, refetchOnWindowFocus: false })

	const handleOnclick = (roomId)=>{
		navigate(`/chat/list/${roomId}`)
	}

	useLayoutEffect(() => {
		if (!isLoggedIn) {
			alert('로그인 후 사용하실 수 있는 기능입니다.')
			navigate('/auth/login')
		}
	}, [])

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
			<h3>ChatList</h3>
			{
				data.map((room, i) => {
					return (
						<>
							<div key={room._id} onClick={()=>handleOnclick(room._id)}>
								<div>채팅방 id {room._id}</div>
								<div>
									참가자 :
									{
										room.member.map((member, i) => {
											return (
												<span key={member.id}>{member.username} | </span>
											)
										})
									}
								</div>
							</div>
						</>
					)
				})
			}
		</div>
	)
}

export default ChatList