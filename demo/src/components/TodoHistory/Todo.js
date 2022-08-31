import React from "react";

function Todo({ id, name, status }) {
	return (
		<div className="todo">
			<div className="todo_id">Todo ID: <span>{id}</span></div>
			<div className="todo_name">{name}</div>
			<div className="todo_status">Status: {status}</div>
		</div>
	);
}

export default Todo;
