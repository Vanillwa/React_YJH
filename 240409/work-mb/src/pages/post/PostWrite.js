import { useNavigate } from 'react-router-dom';
import styles from '../../css/PostWrite.module.css'
import { useMutation } from 'react-query';
import { postPost } from '../../api/api';
import { useAuthContext } from '../../context/AuthContext';
import { useLayoutEffect } from 'react';

function PostWrite() {
	const navigate = useNavigate();
	const { memoUserInfo } = useAuthContext()
	const { isLoggedIn } = memoUserInfo

	const fetchData = useMutation(async (body) => {
		return await postPost(body)
	}, {
		onSuccess: (data) => {
			navigate(`/post/list/${data.insertedId}`)
		}
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		let title = e.target.title.value
		let content = e.target.content.value
		let date = new Date().toLocaleString()

		let body = {title, content, date}
		fetchData.mutate(body)
	}

	useLayoutEffect(()=>{
		if(!isLoggedIn){
			alert('로그인 후 사용하실 수 있는 기능입니다.')
			navigate('/auth/login')
		}
	}, [])

	return (
		<div className={styles.inner}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div>
					<input name='title' placeholder='제목' required className={styles.title}></input>
				</div>
				<div>
					<textarea name='content' placeholder='내용' required className={styles.content}></textarea>
				</div>
				<div className='d-flex justify-content-end gap-2'>
					<button type='button' className='btn btn-danger'>Cancle</button>
					<button type='submit' className='btn btn-primary'>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default PostWrite