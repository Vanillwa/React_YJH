function Item(props) {
  const { el, i, itemDel } = props;
  const accordionId = `accordion-${i}`; // 각 아코디언의 고유 ID 생성

  let itemDelClick = () => itemDel(el.id)

  return (
    <li className="item accordion-item">
      <h2 className="accordion-header" id={`heading${accordionId}`}>
        <div
          className="accordion-button collapsed"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${accordionId}`}
          aria-expanded="false"
          aria-controls={`collapse${accordionId}`}
        >
          <p className="item-id col-2">{el.id}</p>
          <p className="item-name col-3">{el.title}</p>
          <p className="item-content col-3">{el.content}</p>
          <p className="item-calorie col-2">{el.calorie}</p>
          <div className="delBtn-wrapper col-1 text-center">
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={itemDelClick}>삭제</button>
          </div>
        </div>
      </h2>
      <div
        id={`collapse${accordionId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${accordionId}`}
        data-bs-parent={`#accordionExample`}
      >
        <div className="accordion-body">
          <img className="item-img" src={el.imgUrl} alt="" />
        </div>
      </div>
    </li>
  );
}

export default Item;
