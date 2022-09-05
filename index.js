import { useSyncExternalStore } from 'react';

const StateSubFunctions = {
	__newState(stateName, value){
		this.__states[stateName] = value;
		Object.defineProperty(this, stateName, {
			get(){
				return this.__states[stateName];
			},
			set(value){
				this.__states[stateName] = value;
				this.__broadcast(stateName);
			}
		});
	},
	__subscribe(stateName, f){
		if(!(stateName in this.__subsribers)){
			this.__subsribers[stateName] = new Set();
		}
		this.__subsribers[stateName].add(f);
		return ()=> this.__subsribers[stateName].delete(f);
	},
	__broadcast(stateName){
		if(stateName in this.__subsribers){
			this.__subsribers[stateName].forEach(f => f());
		}
	},
	__useSyncExternalStore(stateName){
		return useSyncExternalStore(this.__subscribe.bind(this, stateName), () => this.__states[stateName]);
	},
	__states: {},
	__subsribers: {},
	subTo(stateName){ // will be deprecated in the future
		return stateName in this.__states ? this.__useSyncExternalStore(stateName) : undefined;
	}
};

class StateSub extends Function{
	constructor(store){
		super();
		StateSubFunctions.__proto__ = new Proxy(store, {
			get(target, key, receiver){
				let value = target[key];
				return (typeof value === 'function') ? value.bind(receiver) : value;
			}
		});
		this.__proto__ = StateSubFunctions;
		for(let state in store.initialState){
			this.__newState(state, store.initialState[state]);
		}
		delete store.initialState;
		return new Proxy(this, {
			apply: (target, thisArg, stateName) => {
				return stateName in target.__states ? target.__useSyncExternalStore(stateName) : undefined;
			}
		});
	}
};

export default StateSub;