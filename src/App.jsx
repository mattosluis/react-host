import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const Counter = React.lazy(() => import('react_remote/Counter'));

function App() {
	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React (host)</h1>
			<div className="card">
				<Counter />
			</div>
		</div>
	);
}

export default App;
