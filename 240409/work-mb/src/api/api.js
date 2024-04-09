import axios from "axios"
axios.defaults.baseURL = process.env.REACT_APP_API_URL

export async function joinUser(body) {
	const res = await axios.post('/join', body)
	return res.data
}

export async function loginUser(body){
	const res = await axios.post('/login', body)
	return res.data
}

export async function logoutUser(){
	const res = await axios.get('/logout')
	return res.data
}

export async function getPosts(){
	const res = await axios.get('/posts')
	return res.data?.list
}

export async function getPost(id){
	const res = await axios.get(`/posts/${id}`)
	return res.data?.post
}

export async function postPost(body){
	const res = await axios.post('/posts', body)
	return res.data
}