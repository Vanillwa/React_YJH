import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getPost } from "../../api/api"
import styles from "../../css/PostView.module.css"

function PostView() {
	const { id } = useParams()
	const { data, status } = useQuery(['getPost', id], () => getPost(id), { retry: 0, refetchOnWindowFocus: false})

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
			<div>작성자 : {data.username}</div>
		</div>
	)
}

export default PostView