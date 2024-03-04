import { useParams } from "react-router-dom";

function Detail(props) {
  let { shoes } = props;
  let { id } = useParams();
  if (id == null) id = 0;
  let shoe = shoes.find((el) => el.id == id);

  return (
    <>
      <section className="sec detail">
        <div className="container">
          <h2>Detail</h2>
          <div className="row">
            <div className="col-md-6">
              <img src={process.env.PUBLIC_URL + "/img/shoe" + (parseInt(id) + 1) + ".jpg"} alt=""></img>
            </div>
            <div className="col-md-6 mt-4">
              <h3 className="pt-5">{shoe.title}</h3>
              <p>{shoe.content}</p>
              <p>{shoe.price}</p>
              <button className="btn btn-danger">구매하기</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
