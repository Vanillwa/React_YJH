function Detail(props){
  let { i, post } = props

  return(
      <div className='col detail d-flex'>
        <div className="info col-10">
            <h3>{post[i].title}</h3>
            <p>{post[i].content}</p>
        </div>
        <img src={post[i].imgUrl} className="col-2"></img>
      </div>
  )
}

export default Detail;