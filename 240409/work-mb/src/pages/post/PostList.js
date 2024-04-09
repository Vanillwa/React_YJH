import { Table } from "react-bootstrap"
import { useQuery } from "react-query"
import { getPosts } from "../../api/api"
import styles from '../../css/PostList.module.css'
import { useNavigate } from "react-router-dom"

function PostList() {
	const navigate = useNavigate()
	const { data, status } = useQuery(['getPosts'], () => getPosts(), { retry: 0, refetchOnWindowFocus: false })

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
			<h3 className="text-center">PostList</h3>
			<div className="d-flex justify-content-end">
				<button type="button" className="btn btn-secondary" onClick={()=>navigate('/post/write')}>Write</button>
			</div>
			<Table hover>
				<thead>
					<tr>
						<th>#</th>
						<th>제목</th>
						<th>작성자</th>
						<th>작성일</th>
					</tr>
				</thead>
				<tbody>
					{
						data.map((post, i) => {
							return (
								<tr key={post._id}>
									<td className={styles.postNum} onClick={() => navigate(`/post/list/${post._id}`)}>{i + 1}</td>
									<td className={styles.postTitle} onClick={() => navigate(`/post/list/${post._id}`)}>{post.title}</td>
									<td>{post.userInfo.username}</td>
									<td>{post.date}</td>
								</tr>
							)
						})}
				</tbody>
			</Table>
		</div>
	)
}

export default PostList