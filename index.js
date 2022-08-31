import { useSyncExternalStore } from 'react';

class StateSub{
	
	constructor(store){
		for(let state in store.initialState){
			this.#newState(state, store.initialState[state]); // transferring initial states to store
		}
		delete store.initialState; // clearing initial states
		Object.defineProperty(this, 'subTo', { // defining the subscription function
			value: function(stateName){
				if(stateName in this.#states){
					return useSyncExternalStore(this.#subscribe.bind(this, stateName), () => this.#states[stateName]);
				}
				return undefined; // when someone tries to subscribe to an undefined state, the subscription will be skipped and returned "undefined"
			}
		});
		this.__proto__ = store;
	}

	#newState(stateName, value){ // defining accessors from initialState
		this.#states[stateName] = value;
		Object.defineProperty(this, stateName, {
			get(){
				return this.#states[stateName];
			},
			set(value){
				this.#states[stateName] = value;
				this.#broadcast(stateName); // broadcast to subscribers after any setting a new value to state. 
			}
		});
	}

	#subscribe(stateName, f){
		if(!(stateName in this.#subsribers)){ // create a new room for subscribers, if it doesnt exist
			this.#subsribers[stateName] = new Set();
		}
		this.#subsribers[stateName].add(f); // adding a subscriber to a room
		return ()=> this.#subsribers[stateName].delete(f); // return "subCleaner" for useSyncExternalStore (used when unmounting the component)
	}

	#broadcast(stateName){
		if(stateName in this.#subsribers){
			this.#subsribers[stateName].forEach(f => f());
		}
	}

	#states = {}

	#subsribers = {}
};

export default StateSub;