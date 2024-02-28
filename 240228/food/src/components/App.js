/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../App.css";
import data from "../data/sample.json";
import { useState } from "react";
import Item from "./item";

function App() {
  let [list, setList] = useState(data);
  let [order, setOrder] = useState("id");
  let sortedList =
    order == "id"
      ? [...list].sort((a, b) => a[order] - b[order])
      : [...list].sort((a, b) => b[order] - a[order]);
  let sortById = () => setOrder("id");
  let sortByCalorie = () => setOrder("calorie");

  let itemDel = (id)=>{
    let result = list.filter((item)=> item.id != id )
    setList(result)
  } 

  return (
    <div className="App">
      <section className="section">
        <div className="container container-lg">
          <h2 className="title">Food List</h2>
          <div className="row filter">
            <div className="col btn-wrapper d-flex justify-content-end gap-2">
              <button type="button" className="btn btn-primary btn-sm" onClick={sortById}>
                번호순
              </button>
              <button type="button" className="btn btn-primary btn-sm" onClick={sortByCalorie}>
                칼로리순
              </button>
            </div>
          </div>
          <div className="row list-wrapper">
            <ul className="col list accordion">
              <li className="accordion-item list-header d-flex">
                <p className="col-2">번호</p>
                <p className="col-3">이름</p>
                <p className="col-3">1회 제공량</p>
                <p className="col-2">칼로리</p>
                <p className="col-1">삭제</p>
              </li>
              {sortedList.map((el, i) => {
                return <Item key={el.id} el={el} i={i} list={list} itemDel={itemDel}></Item>;
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
