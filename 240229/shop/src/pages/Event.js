import { Link, Outlet } from "react-router-dom";

function Event(props){
  return(
    <>
      <section className="sec">
        <div className="container">
          <h2>오느레 이벤트!</h2>
          <Link to="/event/one">one</Link><br/>
          <Link to="/event/two">two</Link>
          <Outlet></Outlet>
        </div>
      </section>
    </>
  )
}

export default Event