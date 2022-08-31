import React from "react";
import List from "./List";
import Menu from "./Menu";

function TodoProc({name}) {
	return (
		<div className="todo_proc">
			<div className="todo_proc_name">{name}</div>
			<Menu />
			<List />
		</div>
	);
}

export default TodoProc;
