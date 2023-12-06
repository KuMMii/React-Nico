import { useState, useEffect } from "react";

function Hello() {
	// function destroyedFn() {
	// 	console.log("bye :(");
	// }
	// const effectFn = () => {
	// 	console.log("created :)");
	// 	return destroyedFn;
	// };
	useEffect(() => {
		console.log("hi :)");
		return () => console.log("bye :(");
	}, []);
	return <h1>Hello</h1>;
}

function App() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	);
}

export default App;
