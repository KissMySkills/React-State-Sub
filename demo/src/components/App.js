import React from "react";
import TodoProc from "./TodoProc";
import TodoHistory from './TodoHistory/index';

function App() {
	return (
		<div className="app">
			<TodoProc name="Todo Component"/>
			<TodoProc name="Todo Component(copy)"/>
			<TodoHistory />
		</div>
	);
}

export default App;
