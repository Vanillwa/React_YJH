/* eslint-disable */

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState } from "react";

function App() {
    // let [title, setTitle] = useState([
    //     "Hello World!",
    //     "I love Node.js!",
    //     "I love Javascript!",
    // ]);
    // let [like, setLike] = useState([0, 0, 0]);
    let [post, setPost] = useState([
        {title : "Hello World!", date : '24-02-11', like : 0},
        {title : "I love Node.js!", date : '24-02-12', like : 0},
        {title : "I love React!", date : '24-02-14', like : 0}
    ])
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
                            post.map((e, i)=>{
                                return (
                                    <div key={i} className="item">
                                        <h3 onClick={()=>{setDetail(i)}}>{e.title}</h3>
                                        <p>24-02-26</p>
                                        <button
                                            type="button"
                                            className="likeBtn"
                                            onClick={() => likeInc(i)}
                                        >
                                            👍 : {e.like}
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
