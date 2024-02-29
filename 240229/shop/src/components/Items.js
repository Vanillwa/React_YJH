import Item from "./Item";
function Items(props) {
  let { shoes } = props;
  return (
    <>
      <div className="row">
        {shoes.map((el, i) => {
          return <Item key={el.id} el={el} i={i}></Item>;
        })}
      </div>
    </>
  );
}

export default Items