import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { getPost, requestChat } from "../../api/api"
import styles from "../../css/PostView.module.css"
import { Button } from "react-bootstrap"

function PostView() {
	const navigate = useNavigate();
	const { id } = useParams()
	const { data, status } = useQuery(['getPost', id], () => getPost(id), { retry: 0, refetchOnWindowFocus: false})

	const handleRequest = async (targetId)=>{
		const res = await requestChat(targetId)
		if(res.message === 'success' || res.message === 'Exist'){
			navigate(`/chat/list/${res.roomId}`)
		}else{
			alert(res.message)
		}
	}

	if (status === 'loading') {
		return (
			<div>로딩중</div>
		)
	}
	if (status === "error") {
		return (
			<div>에러</div>
		);
	}
	return (
		<div className={styles.inner}>
			<hr></hr>
			<div>{data.title}</div>
			<hr></hr>
			<div>{data.content}</div>
			<hr></hr>
			<div>작성자 : {data.userInfo.username} | <Button variant="secondary" size="sm" onClick={()=>handleRequest(data.userInfo.id)}>채팅하기</Button></div>
		</div>
	)
}

export default PostView