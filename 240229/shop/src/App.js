import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import data from "./data";
import { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Event from "./pages/Event";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
	let [shoes] = useState(data);
	let naviGate = useNavigate();
	let [visualActive, setVisualActive] = useState(true);

	useEffect(() => {
		let timer = setTimeout(() => {
			setVisualActive(false);
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<Header></Header>
			{visualActive ? <section className="visual"></section> : null}
			<button
				onClick={() => {
					naviGate("/detail");
				}}>
				이동
			</button>
			<Routes>
				<Route path="/" element={<Main shoes={shoes} setVisualActive={setVisualActive}></Main>}></Route>
				<Route path="/detail" element={<Detail shoes={shoes}></Detail>}></Route>
				<Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>
				<Route path="/about" element={<About></About>}>
					<Route path="member" element={<div>member</div>}></Route>
					<Route path="location" element={<div>location</div>}></Route>
				</Route>
				<Route path="/event" element={<Event></Event>}>
					<Route path="one" element={<div>첫 주문시 신발 청결제 서비스</div>}></Route>
					<Route path="two" element={<div>생일기념 쿠폰 받기</div>}></Route>
				</Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
		</>
	);
}

export default App;
