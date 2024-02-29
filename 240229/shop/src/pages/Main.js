import Items from "../components/Items";

function Main(props) {
  let { shoes } = props;
  return (
    <>
      <section className="sec">
        <div className="container">
          <Items shoes={shoes}></Items>
        </div>
      </section>
    </>
  );
}

export default Main;
