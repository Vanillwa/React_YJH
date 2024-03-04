import Post from "./Post";
import Accordion from "react-bootstrap/Accordion";

function PostList(props) {
	let { list } = props;

	return (
		<>
			<section className="sec pt-5">
				<div className="container container-lg">
					<div className="inner">
						<h2 className="sec-title text-center pb-3">Post List</h2>
						<Accordion alwaysOpen>
							{list.map((el, i) => {
								return <Post key={el.id} post={el}></Post>;
							})}
						</Accordion>
					</div>
				</div>
			</section>
		</>
	);
}

export default PostList;
