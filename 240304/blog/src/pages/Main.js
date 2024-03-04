import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

function Main(props) {
	let { list } = props;

	return (
		<>
			<PostForm></PostForm>
			<PostList list={list}></PostList>
		</>
	);
}

export default Main;
