import { Link } from "react-router-dom";

function Item(props) {
  let { el, i } = props;
  let url = '/detail/'+el.id
  return (
    <>
      <div className="col-md-4">
        <Link to={url}>
          <img src={process.env.PUBLIC_URL + "/img/shoe" + (el.id + 1) + ".jpg"} alt="" />
          <h3>{el.title}</h3>
          <p>{el.content}</p>
        </Link>
      </div>
    </>
  );
}

export default Item