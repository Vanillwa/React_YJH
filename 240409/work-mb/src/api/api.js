import axios from "axios"
axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.withCredentials = true

export async function joinUser(body) {
	const res = await axios.post('/join', body)
	return res.data
}

export async function loginUser(body) {
	const res = await axios.post('/login', body)
	return res.data
}

export async function logoutUser() {
	const res = await axios.get('/logout')
	return res.data
}

export async function getPostList() {
	const res = await axios.get('/post')
	return res.data?.list
}

export async function getPost(id) {
	const res = await axios.get(`/post/${id}`)
	return res.data?.post
}

export async function postPost(body) {
	const res = await axios.post('/post', body)
	return res.data
}

export async function requestChat(targetId) {
	const res = await axios.get(`/chat/request?targetId=${targetId}`)
	return res.data
}

export async function getChatList() {
	const res = await axios.get('/chat/list')
	return res.data
}

export async function getChatInfo(roomId) {
	const res = await axios.get(`/chat/list/${roomId}`)
	return res.data
}