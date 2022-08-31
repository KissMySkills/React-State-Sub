import React from "react";
import store from "../../globals/store";
import Todo from './Todo';

function List() {
	const list = store.subTo('list');

	return (
		<div className="list">
			{list.map(todo => <Todo key={todo.id} {...todo}/>)}
		</div>
	);
}

export default List;
