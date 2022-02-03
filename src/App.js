/** @format */

import logo from "./icons/circle.svg";
import "./App.css";
import Nav from "./components/LoadingPage/Nav/Nav";
import PageOne from "./components/PageOne/PageOne";
// import Home from "./components/Main/Home/Home";
// import Logo2 from "./components/Main/Logo2/Logo2";
function App() {
	return (
		<div className='App'>
			<div className='loadingPage'>
				<Nav></Nav>
			</div>
			<PageOne />
		</div>
	);
}

export default App;
