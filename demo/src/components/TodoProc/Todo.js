import React from "react";
import store from "../../globals/store";

function Todo({ id, name }) {
	return (
		<div className="todo">
			<div className="todo_id">Todo ID: <span>{id}</span></div>
			<div className="todo_name">{name}</div>
			<div className="todo_remove" onClick={store.remove.bind(store, id)}>Remove</div>
		</div>
	);
}

export default Todo;
