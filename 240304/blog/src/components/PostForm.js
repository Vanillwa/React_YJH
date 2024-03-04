import { Button } from "react-bootstrap";

function PostForm() {
	return (
		<>
			<section className="sec post-form pt-5">
				<div className="container container-lg">
					<div className="inner row row-cols-1">
						<h2 className="sec-title col text-center pb-3">New Post</h2>
						<form className="post-form col d-flex flex-column gap-2 py-4 rounded">
							<div className="input-wrapper d-flex justify-content-center">
								<label htmlFor="title" className="text-center">
									Title
								</label>
								<input type="text" name="title" id="title" className="" />
							</div>
							<div className="input-wrapper d-flex justify-content-center">
								<label htmlFor="content" className="text-center">
									Content
								</label>
								<input type="text" name="content" id="content" className="" />
							</div>
							<div className="btn-wrapper text-center col">
								<Button variant="primary" size="lg">
									Submit
								</Button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default PostForm;
