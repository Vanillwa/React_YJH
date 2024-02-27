/* eslint-disable */

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { useState } from 'react';
import Box from './Box.js';
import Detail from './Detail.js';
import data from '../data/mock.json';

function App() {
    let [post, setPost] = useState(data)
    let [selectNum, setSelectNum] = useState(0)
    let [inputPost, setInputPost] = useState({title : '', content : '', like : 0})
    let [order, setOrder] = useState('createdAt');
    let sortedItems = (order == 'id') 
        ? data.sort((a,b) => a[order] - b[order]) 
        : data.sort((a,b) => b[order] - a[order]);

    let sortByDate = () => setOrder('createdAt')
    let sortByRating = () => setOrder('rating')
    let sortById = () => setOrder('id')

    return (
        <div className='App'>
            <section className='section'>
                <div className='container container-lg'>
                    <h2 className='title'>Posts</h2>
                    <div className='row bar'>
                        <div className='col d-flex gap-2 filter'>
                            <button className='sortBtn' type="button" onClick={sortByDate}>최신순</button>
                            <button className='sortBtn' type="button" onClick={sortByRating}>평점순</button>
                            <button className='sortBtn' type="button" onClick={sortById}>아이디순</button>
                        </div>
                        <div className='col d-flex justify-content-end align-items-center gap-2 add'>
                            <label htmlFor='inputTitle'>제목 : </label>
                            <input type="text" id='inputTitle' onChange={(e)=>{
                                let copy = {...inputPost}
                                copy.title = e.target.value;
                                setInputPost(copy)
                            }} value={inputPost.title}/>
                            <label htmlFor='inputDate'>날짜 : </label>
                            <input type="date" id='inputDate' onChange={(e)=>{
                                let copy = {...inputPost}
                                copy.date = e.target.value;
                                setInputPost(copy)
                            }} value={inputPost.date}/>
                            <button type="button" onClick={()=>{
                                if(inputPost.title == ''){
                                    alert('Title을 입력해주세요.')
                                    return
                                }
                                if(inputPost.date == ''){
                                    alert('Date를 입력해주세요.')
                                    return
                                }
                                setPost([...post, inputPost])
                                setInputPost({title : '', date : '', like : 0})
                            }}>추가</button>
                        </div>
                    </div>
                    <div className='row row-cols-1 list'>
                        <div className='col header d-flex'>
                                <p className='col-1'>ID</p>
                                <p className='col-8'>Title</p>
                                <p className='col-1'>Rating</p>
                                <p className='col-2'>Date</p>
                        </div>
                        {
                            post.map((el, i)=>{
                                return(
                                    <Box key={i} el={el} i={i} setSelectNum={setSelectNum} setPost={setPost} post={post}></Box>
                                )
                            })
                        }
                    </div>
                    <div className='row row-detail'>
                        <Detail i={selectNum} post={post}></Detail>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;