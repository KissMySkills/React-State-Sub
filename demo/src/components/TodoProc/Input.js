import React from "react";
import store from '../../globals/store';

function Input() {
	const name = store.subTo("name");

	return <input
		placeholder="type something..."
		value={name} // or you can bind value in the HardCore Style: value={store.sub("name")}
		onChange={store.nameSet.bind(store)}  // binding a call context
		// also u can use it like: onChange={() => store.nameSet()}
		// or change the state directly: onChange={e => store.name = e.target.value}
	/>;
}

export default Input;
