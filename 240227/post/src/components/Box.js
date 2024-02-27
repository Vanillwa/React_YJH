function Box(props){
  let { el, i, setSelectNum, post, setPost } = props

  return(
      <div className='col box d-flex align-items-center' onClick={()=>setSelectNum(i)}>
            <p className="col-1">{el.id}</p>
            <p className="col-8">{el.title}</p>
            <p className="col-1">{el.rating}</p>
            <p className="col-2">{formatDate(el.createdAt)}</p>  
      </div>
  )
}

function formatDate(timestamp) {
    const date = new Date(timestamp); // 타임스탬프를 Date 객체로 변환
  
    const year = date.getFullYear(); // 연도 가져오기
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 가져오기 (0부터 시작하므로 +1)
    const day = String(date.getDate()).padStart(2, '0'); // 일 가져오기
  
    return `${year}-${month}-${day}`; // "yyyy-mm-dd" 형식으로 조합하여 반환
  }

export default Box;