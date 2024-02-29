import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function About(props){

  let [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('ㅎㅇ')
  }, [])

  return(
    <>
      <section className="sec">
        <div className="container">
          <h2>About page</h2>
          <button onClick={()=>{setCount(count+1)}}>count : {count}</button>
          <Outlet></Outlet>
        </div>
      </section>
    </>
  )
}

export default About