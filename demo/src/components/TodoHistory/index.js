import React from "react";
import store from "../../globals/store";
import Todo from "./Todo";

function TodoHistory() {
	const history = store.subTo('history');
	return (
		<div className="todo_history">
			<div className="todo_history_name">Todo Hisrory</div>
			<div className="list" style={{flexDirection: 'column-reverse', justifyContent: 'flex-end'}}>
				{Object.keys(history).map(id => <Todo key={id} {...history[id]}/>)}
			</div>
		</div>
	);
}

export default TodoHistory;
