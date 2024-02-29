/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import subject from "./data/data";

function App() {
    let {info} = subject
    let [post, setPost] = useState(info)
    let [detail, setDetail] = useState(false)

    function likeInc(i) {
        let copy = [...post];
        copy[i].like += 1;
        setPost(copy);
    }

    function titleUpdate(i) {
        let newTitle = document.querySelectorAll(".titleInput")[i].value;
        document.querySelectorAll(".titleInput")[i].value = "";
        let copy = [...post]
        copy[i].title = newTitle;
        setPost(copy);
    }

    function sort() {
        const sortedPosts = [...post].sort((a, b) => a.title.localeCompare(b.title));
        setPost(sortedPosts);
    }

    return (
        <div className="App">
            <header className="header">
                <div className="container">
                    <h1 className="logo">
                        <a href="/">Blog</a>
                    </h1>
                </div>
            </header>
            <section className="section blog">
                <div className="container">
                    <div className="btn-wrap">
                        <button type="button" onClick={() => sort()}>
                            리스트 정렬
                        </button>
                    </div>
                    <div className="row list">
                        {
                            post.map((el, i)=>{
                                return (
                                    <div key={el.id} className="item">
                                        <h3 onClick={()=>{setDetail(i)}}>{el.title}</h3>
                                        <p>24-02-26</p>
                                        <button
                                            type="button"
                                            className="likeBtn"
                                            onClick={() => likeInc(i)}
                                        >
                                            👍 : {el.like}
                                        </button>
                                        <input type="text" className="titleInput"></input>
                                        <button
                                            type="button"
                                            id="updateBtn"
                                            onClick={() => titleUpdate(i)}
                                        >
                                            수정
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            detail >= 1 ? <Detail post={post} i={detail}></Detail> : null
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

function Detail(props) {
    let {post, i} = props
    return (
        <div className="detail">
            <h3>{post[i].title}</h3>
            <p>{post[i].date}</p>
        </div>
    );
}

export default App;
