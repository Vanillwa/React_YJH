/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import data from "./data/data.json";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
	let [list, setList] = useState(data.blog);

	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Main list={list}></Main>}></Route>
			</Routes>
		</>
	);
}

export default App;
