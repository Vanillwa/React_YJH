import Accordion from "react-bootstrap/Accordion";

function Post(props) {
	let { post } = props;

	return (
		<Accordion.Item eventKey={post.id}>
			<Accordion.Header>
				<div className="col d-flex">
					<div className="col-2 text-center px-1">{post.id}</div>
					<div className="col-8 px-1">{post.title}</div>
					<div className="col-2 text-center px-1">{post.User.username}</div>
				</div>
			</Accordion.Header>
			<Accordion.Body>{post.content}</Accordion.Body>
		</Accordion.Item>
	);
}

export default Post;
