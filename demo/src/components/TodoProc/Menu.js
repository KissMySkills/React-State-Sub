import React from "react";
import Input from "./Input";
import store from "../../globals/store";

function Menu() {
	return (
		<div className="menu">
			<Input />
			<div className="todo_add" onClick={store.add.bind(store)}>Add</div>
		</div>
	);
}

export default Menu;
