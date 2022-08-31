import StateSub from 'react-state-sub';

const store = {
	initialState:{ // after initialization, all initial states will be defined at the top level of this store
		name: '',   // todo name
		list: [],   // todo list
		history: {} // todo history list
		// state, state, state...
	},
	
	// store functions, params, objects etc(everything you need)
	todoId:0,

	add(){
		if(this.name){ // if(todo name)
			const todo = {
				id: ++this.todoId,
				name: this.name
			};
			this.list = [...this.list, todo] // update list(like a setState([...list, todo]));
			this.name = ''; // name reset(like a setState('')).
			this.historyAdd(todo);
		}
	},

	remove(id){
		this.list = this.list.filter(todo => todo.id !== id);
		this.history[id].status = 'complited';
		this.history = {...this.history};
	},

	nameSet(e){
		this.name = e.target.value;
	},

	historyAdd(todo){
		this.history = {
			...this.history,
			[todo.id]:{
				...todo,
				status: 'active'
			}
		};
	}
};

export default new StateSub(store);