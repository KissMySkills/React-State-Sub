import { useSyncExternalStore } from 'react';

class StateSub{
	
	constructor(store){
		for(let state in store.initialState){
			this.__newState(state, store.initialState[state]); // transferring initial states to store
		}
		delete store.initialState; // clearing initial states
		Object.defineProperty(this, 'subTo', { // defining the subscription function
			value: function(stateName){
				if(stateName in this.__states){
					return useSyncExternalStore(this.__subscribe.bind(this, stateName), () => this.__states[stateName]);
				}
				return undefined; // when someone tries to subscribe to an undefined state, the subscription will be skipped and returned "undefined"
			}
		});
		this.__proto__ = store;
	}

	__newState(stateName, value){ // defining accessors from initialState
		this.__states[stateName] = value;
		Object.defineProperty(this, stateName, {
			get(){
				return this.__states[stateName];
			},
			set(value){
				this.__states[stateName] = value;
				this.__broadcast(stateName); // broadcast to subscribers after any setting a new value to state. 
			}
		});
	}

	__subscribe(stateName, f){
		if(!(stateName in this.__subsribers)){ // create a new room for subscribers, if it doesnt exist
			this.__subsribers[stateName] = new Set();
		}
		this.__subsribers[stateName].add(f); // adding a subscriber to a room
		return ()=> this.__subsribers[stateName].delete(f); // return "subCleaner" for useSyncExternalStore (used when unmounting the component)
	}

	__broadcast(stateName){
		if(stateName in this.__subsribers){
			this.__subsribers[stateName].forEach(f => f());
		}
	}

	__states = {}

	__subsribers = {}
};

export default StateSub;