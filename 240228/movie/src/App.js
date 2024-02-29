import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { useEffect, useState } from "react";
//import { getList } from "./api";
import data from "./data/reviews.json"

function App() {
  const [list, setList] = useState(data.reviews);

  // const dataLoad = async () => {
  //   let {data} = await getList();
  //   setList(data);
  // };
  
  // useEffect(()=>{
  //   dataLoad()
  // }, [])
  
  return (
    <div className="App">
      <section className="sec">
        <div className="container-lg">
          <h2 className="title pt-5 pb-3 text-center fw-bold">Movie Review</h2>
          <ReviewList list={list}></ReviewList>
          <button type="button">
            출력하기
          </button>
        </div>
      </section>
    </div>
  );
}

// row
function ReviewList(props) {
  let { list } = props;
  return (
    <>
      <div className="row row-cols-3">
        {list.map((el, i) => {
          return <ReviewItem key={el.id} el={el} i={i}></ReviewItem>;
        })}
      </div>
    </>
  );
}

// item
function ReviewItem(props) {
  let { el, i } = props;
  let { id, title, content, imgUrl, rating, createdAt } = el;
  return (
    <>
      <div className="col text-center px-4 py-3 box">
        <div className="inner px-4 py-4">
          <div className="img-wrapper col">
            <img src={imgUrl} alt=""/>
          </div>
          <div className="col d-flex justify-content-between py-3">
            <p className="col-4">{id}</p>
            <p className="col-8">{title}</p>
          </div>
          <p className="col item-content">{content}</p>
        </div>
      </div>
    </>
  );
}

export default App;
